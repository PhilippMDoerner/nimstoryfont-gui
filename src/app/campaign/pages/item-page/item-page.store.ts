import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, shareReplay, switchMap, take, tap } from 'rxjs';
import { Item } from 'src/app/_models/item';
import { ItemService } from 'src/app/_services/article/item.service';
import { WarningsService } from 'src/app/_services/utils/warnings.service';
import { GlobalStore } from 'src/app/global.store';
import { replaceItem } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { withImages } from 'src/utils/store/withImages';
import { withQueries } from 'src/utils/store/withQueries';

interface ItemState {}

const initialState: ItemState = {};

export const ItemPageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const itemService = inject(ItemService);
    const globalStore = inject(GlobalStore);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
      take(1),
    );
    return {
      item: (name: string) =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            itemService.readByParam(campaignName, { name }),
          ),
        ),
    };
  }),
  withImages('item', {
    onCreateSuccess: (state, newImg) => {
      const newItem = {
        ...(state.item() as Item),
        images: [...(state.item()?.images ?? []), newImg],
      };
      patchState(state, { item: newItem });
    },
    onDeleteSuccess: (state, imgPk) => {
      const newItem = {
        ...(state.item() as Item),
        images: state.item()?.images?.filter((img) => img.pk !== imgPk) ?? [],
      };
      patchState(state, { item: newItem });
    },
    onUpdateSuccess: (state, newImg) => {
      const newItem = {
        ...(state.item() as Item),
        images: replaceItem(state.item()?.images ?? [], newImg, 'pk'),
      };
      patchState(state, { item: newItem });
    },
  }),
  withMethods((state) => {
    const itemService = inject(ItemService);
    const warningService = inject(WarningsService);
    return {
      deleteItem: rxMethod<number>(
        pipe(
          tap(() => patchState(state, { itemQueryState: 'loading' })),
          switchMap((pk) => itemService.delete(pk)),
          tapResponse({
            next: () =>
              patchState(state, { item: undefined, itemQueryState: 'success' }),
            error: warningService.showWarning,
          }),
        ),
      ),
      updateItem: rxMethod<Item>(
        pipe(
          tap(() => patchState(state, { itemQueryState: 'loading' })),
          switchMap((item) => itemService.update(item.pk!, item)),
          tapResponse({
            next: (item) =>
              patchState(state, { item, itemQueryState: 'success' }),
            error: warningService.showWarning,
          }),
        ),
      ),
    };
  }),
);
