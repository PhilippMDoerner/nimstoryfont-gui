import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { shareReplay, take } from 'rxjs';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import { MarkerTypeService } from 'src/app/_services/article/marker-type.service';
import { PlayerClassService } from 'src/app/_services/article/player-class.service';
import { sortByProp } from 'src/utils/array';
import { mapVoid } from 'src/utils/rxjs-operators';

export type ConfigAdministrationPageState = {
  markerTypes: MapMarkerType[] | undefined;
  markerTypeLoadState: 'init' | 'loading' | 'done' | 'error';
  playerClasses: PlayerClass[] | undefined;
  playerClassLoadState: 'init' | 'loading' | 'done' | 'error';
};

const initialState: ConfigAdministrationPageState = {
  markerTypes: undefined,
  markerTypeLoadState: 'init',
  playerClasses: undefined,
  playerClassLoadState: 'init',
};

export const ConfigAdministrationPageStore = signalStore(
  withState(initialState),
  withMethods((state) => {
    const playerClassService = inject(PlayerClassService);
    const markerTypeService = inject(MarkerTypeService);

    return {
      loadPlayerClasses: () => {
        patchState(state, {
          playerClasses: undefined,
          playerClassLoadState: 'loading',
        });
        playerClassService
          .list()
          .pipe(take(1))
          .subscribe((playerClasses) => {
            patchState(state, {
              playerClasses: sortByProp(playerClasses, 'name'),
              playerClassLoadState: 'done',
            });
          });
      },
      loadMarkerTypes: () => {
        patchState(state, {
          markerTypes: undefined,
          markerTypeLoadState: 'loading',
        });
        markerTypeService
          .list()
          .pipe(take(1))
          .subscribe((markerTypes) => {
            patchState(state, {
              markerTypes: sortByProp(markerTypes, 'name'),
              markerTypeLoadState: 'done',
            });
          });
      },
      createPlayerClass: (playerClass: PlayerClass) => {
        const request$ = playerClassService
          .create(playerClass)
          .pipe(take(1), shareReplay(1));

        request$.subscribe((createdPlayerClass) => {
          const newList = [
            createdPlayerClass,
            ...(state.playerClasses() ?? []),
          ];
          patchState(state, { playerClasses: sortByProp(newList, 'name') });
        });

        return request$.pipe(mapVoid());
      },
      deletePlayerClass: (playerClassPk: number) => {
        const request$ = playerClassService
          .delete(playerClassPk)
          .pipe(take(1), shareReplay(1));

        request$.subscribe(() => {
          const newList = state
            .playerClasses()
            ?.filter((u) => u.pk !== playerClassPk);

          patchState(state, { playerClasses: newList });
        });

        return request$.pipe(mapVoid());
      },
      createMarkerType: (markerType: MapMarkerType) => {
        const request$ = markerTypeService
          .create(markerType)
          .pipe(take(1), shareReplay(1));

        request$.subscribe((createdMarkerType) => {
          const newList = sortByProp(
            [createdMarkerType, ...(state.markerTypes() ?? [])],
            'name',
          );
          patchState(state, { markerTypes: newList });
        });
      },
      deleteMarkerType: (markerTypePk: number) => {
        const request$ = markerTypeService
          .delete(markerTypePk)
          .pipe(take(1), shareReplay(1));

        request$.subscribe(() => {
          const newList = state
            .markerTypes()
            ?.filter((u) => u.id !== markerTypePk);
          patchState(state, { markerTypes: newList });
        });

        return request$;
      },
    };
  }),
);
