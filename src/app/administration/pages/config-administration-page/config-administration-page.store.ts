import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe, shareReplay, switchMap, take } from 'rxjs';
import { NodeLinkTypeRaw } from 'src/app/_models/graph';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import { httpErrorToast } from 'src/app/_models/toast';
import { MarkerTypeService } from 'src/app/_services/article/marker-type.service';
import { PlayerClassService } from 'src/app/_services/article/player-class.service';
import { RelationshipTypeService } from 'src/app/_services/article/relationship-type.service';
import { GlobalStore } from 'src/app/global.store';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { sortByProp } from 'src/utils/array';
import { filterNil, mapVoid } from 'src/utils/rxjs-operators';
import { withQueries } from 'src/utils/store/withQueries';

export type ConfigAdministrationPageState = {};

const initialState: ConfigAdministrationPageState = {};

export const ConfigAdministrationPageStore = signalStore(
  withState(initialState),
  withQueries(() => {
    const playerClassService = inject(PlayerClassService);
    const markerTypeService = inject(MarkerTypeService);
    const relationshipTypeService = inject(RelationshipTypeService);
    const globalStore = inject(GlobalStore);
    const campaignName$ = toObservable(globalStore.campaignName);

    return {
      campaignPlayerClasses: () =>
        campaignName$.pipe(
          filterNil(),
          switchMap((campaignName) =>
            playerClassService.campaignList(campaignName),
          ),
          map((classes) => sortByProp(classes, 'name')),
        ),
      campaignMarkerTypes: () =>
        campaignName$.pipe(
          filterNil(),
          switchMap((campaignName) =>
            markerTypeService.campaignList(campaignName),
          ),
          map((types) => sortByProp(types, 'name')),
        ),
      campaignNodeLinkTypes: () =>
        campaignName$.pipe(
          filterNil(),
          switchMap((campaignName) =>
            relationshipTypeService.campaignList(campaignName),
          ),
          map((types) => sortByProp(types, 'name')),
        ),
      playerClasses: () =>
        playerClassService
          .list()
          .pipe(map((classes) => sortByProp(classes, 'name'))),
      markerTypes: () =>
        markerTypeService
          .list()
          .pipe(map((types) => sortByProp(types, 'name'))),
      nodeLinkTypes: () =>
        relationshipTypeService
          .list()
          .pipe(map((types) => sortByProp(types, 'name'))),
    };
  }),
  withMethods((state) => {
    const playerClassService = inject(PlayerClassService);
    const markerTypeService = inject(MarkerTypeService);
    const relationshipTypeService = inject(RelationshipTypeService);
    const toastService = inject(ToastService);

    return {
      createRelationshipType: rxMethod<NodeLinkTypeRaw>(
        pipe(
          switchMap((relationshipType) =>
            relationshipTypeService.create(relationshipType),
          ),
          tapResponse(
            (createdRelationshipType) => {
              const newList = [
                createdRelationshipType,
                ...(state.nodeLinkTypes() ?? []),
              ];
              patchState(state, { nodeLinkTypes: sortByProp(newList, 'name') });
            },
            (error: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(error)),
          ),
        ),
      ),
      deleteRelationshipType: rxMethod<number>(
        pipe(
          switchMap((id) =>
            relationshipTypeService.delete(id).pipe(map(() => id)),
          ),
          tapResponse({
            next: (id) => {
              const newList = state.nodeLinkTypes()?.filter((u) => u.id !== id);
              patchState(state, { nodeLinkTypes: newList });
            },
            error: (error: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(error)),
          }),
        ),
      ),
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
