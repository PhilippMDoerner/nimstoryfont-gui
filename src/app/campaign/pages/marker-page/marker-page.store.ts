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
import { MarkerService } from 'src/app/_services/article/marker.service';
import { GlobalStore } from 'src/app/global.store';
import { filterNil } from 'src/utils/rxjs-operators';
import { withQueries } from 'src/utils/store/withQueries';

type MarkerState = {};

const initialState: MarkerState = {};

export const MarkerPageStore = signalStore(
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const globalStore = inject(GlobalStore);
    const markerService = inject(MarkerService);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      marker: (param: {
        parentLocationName: string;
        locationName: string;
        name: string;
      }) =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            markerService.readByParam(campaignName, param),
          ),
        ),
    };
  }),
  withMethods((store) => {
    return {
      reset: () =>
        patchState(store, {
          marker: undefined,
          markerError: undefined,
          markerQueryState: 'init',
        }),
    };
  }),
);
