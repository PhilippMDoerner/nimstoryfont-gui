import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { shareReplay, switchMap } from 'rxjs';
import { Item, ItemRaw } from 'src/app/_models/item';
import { CharacterService } from 'src/app/_services/article/character.service';
import { ItemService } from 'src/app/_services/article/item.service';
import { WarningsService } from 'src/app/_services/utils/warnings.service';
import { GlobalStore } from 'src/app/global.store';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';
import { withUpdates } from 'src/utils/store/withUpdates';

type ItemCreateUpdateState = {
  createState: RequestState;
};

const initialState: ItemCreateUpdateState = {
  createState: 'init',
};

export const ItemCreateUpdateStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withQueries(() => {
    const globalStore = inject(GlobalStore);
    const itemService = inject(ItemService);
    const characterService = inject(CharacterService);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      item: (name: string) =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            itemService.readByParam(campaignName, { name }),
          ),
        ),
      campaignCharacters: () =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            characterService.campaignList(campaignName),
          ),
        ),
    };
  }),
  withUpdates(() => {
    const itemService = inject(ItemService);
    return {
      item: (updated: Item) => itemService.update(updated.pk!, updated),
    };
  }),
  withMethods((store) => {
    const itemService = inject(ItemService);
    const warningService = inject(WarningsService);
    return {
      reset: () =>
        patchState(store, {
          itemServerModel: undefined,
          item: undefined,
          itemError: undefined,
          itemUpdateError: undefined,
          createState: 'init',
          itemUpdateState: 'init',
          itemQueryState: 'init',
        }),
      createItem: (item: ItemRaw) => {
        patchState(store, { createState: 'loading', item: undefined });
        itemService.create(item).subscribe({
          next: (newItem) =>
            patchState(store, { item: newItem, createState: 'success' }),
          error: warningService.showWarning,
        });
      },
    };
  }),
);
