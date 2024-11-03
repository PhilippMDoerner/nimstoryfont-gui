import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { shareReplay, switchMap, take } from 'rxjs';
import { Location } from 'src/app/_models/location';
import { CharacterService } from 'src/app/_services/article/character.service';
import { LocationService } from 'src/app/_services/article/location.service';
import { GlobalStore } from 'src/app/global.store';
import { replaceItem } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { withImages } from 'src/utils/store/withImages';
import { withQueries } from 'src/utils/store/withQueries';

type LocationPageState = {};

const initialState: LocationPageState = {};

export const LocationPageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const globalStore = inject(GlobalStore);
    const locationService = inject(LocationService);
    const characterService = inject(CharacterService);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      location: (params: { name: string; parentLocationName: string }) =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            locationService.readByParam(campaignName, params),
          ),
        ),
      campaignCharacters: () =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            characterService.campaignList(campaignName),
          ),
        ),
    };
  }),
  withImages('location', {
    onCreateSuccess: (store, image) => {
      const updatedLocation: Location = {
        ...(store.location() as Location),
        images: [...(store.location()?.images ?? []), image],
      };
      patchState(store, { location: updatedLocation });
    },
    onDeleteSuccess: (store, imgPk) => {
      const updatedCerature: Location = {
        ...(store.location() as Location),
        images: (store.location()?.images ?? []).filter(
          (img) => img.pk !== imgPk,
        ),
      };
      patchState(store, { location: updatedCerature });
    },
    onUpdateSuccess: (store, image) => {
      const updatedLocation: Location = {
        ...(store.location() as Location),
        images: replaceItem(store.location()?.images ?? [], image, 'pk'),
      };
      patchState(store, { location: updatedLocation });
    },
  }),
  withMethods((store) => {
    const locationService = inject(LocationService);

    return {
      reset: () =>
        patchState(store, {
          location: undefined,
          locationError: undefined,
          locationQueryState: 'init',
        }),
      deleteLocation: (location: Location) =>
        locationService.delete(location.pk as number),
    };
  }),
);
