import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { shareReplay, switchMap, take } from 'rxjs';
import { DiaryEntry } from 'src/app/_models/diaryentry';
import {
  Encounter,
  EncounterConnection,
  EncounterConnectionRaw,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { httpErrorToast } from 'src/app/_models/toast';
import { CharacterService } from 'src/app/_services/article/character.service';
import { DiaryentryService } from 'src/app/_services/article/diaryentry.service';
import { EncounterConnectionService } from 'src/app/_services/article/encounter-connection.service';
import { EncounterService } from 'src/app/_services/article/encounter.service';
import { LocationService } from 'src/app/_services/article/location.service';
import { ToastService } from 'src/app/design/organisms/toast-overlay/toast-overlay.component';
import { GlobalStore } from 'src/app/global.store';
import { replaceItem, sortByProp } from 'src/utils/array';
import { log } from 'src/utils/logging';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';

export interface DiaryEntryEncounter {
  encounter: Encounter | EncounterRaw;
  isUpdating: boolean;
}

type DiaryentryPageState = {
  diaryEntryDeleteState: RequestState;
  encounterServerModel: Encounter | undefined;
  _encountersInUpdateStateIds: Set<number>;
  _encountersBeingCreated: EncounterRaw[];
  isUpdatingGlobally: boolean;
};

const initialState: DiaryentryPageState = {
  diaryEntryDeleteState: 'init',
  encounterServerModel: undefined,
  _encountersInUpdateStateIds: new Set(),
  _encountersBeingCreated: [],
  isUpdatingGlobally: false,
};

export const DiaryentryPageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withQueries(() => {
    const diaryentryService = inject(DiaryentryService);
    const characterService = inject(CharacterService);
    const locationService = inject(LocationService);
    const globalStore = inject(GlobalStore);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      diaryentry: (params: {
        name: string;
        isMainSession: 0 | 1;
        sessionNumber: number;
      }) =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            diaryentryService.readByParam(campaignName, params),
          ),
        ),
      campaignCharacters: () =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            characterService.getNonPlayerCharacters(campaignName),
          ),
        ),
      campaignLocations: () =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            locationService.campaignList(campaignName),
          ),
        ),
    };
  }),
  withComputed((store) => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.canPerformActionsOfRole('member'),
      diaryEntryEncounters: computed<DiaryEntryEncounter[]>(() => {
        const allEncounters = [
          ...(store.diaryentry()?.encounters ?? []),
          ...store._encountersBeingCreated(),
        ];
        const sortedEncounters = sortByProp(allEncounters, 'order_index');
        return sortedEncounters.map((encounter, index) => ({
          encounter,
          isUpdating: store._encountersInUpdateStateIds().has(index),
        }));
      }),
      isUpdatingAnyEncounters: computed(
        () => store._encountersInUpdateStateIds().size > 0,
      ),
      realEncounters: computed<Encounter[]>(
        () => store.diaryentry()?.encounters ?? [],
      ),
    };
  }),
  withMethods((store) => {
    const toastService = inject(ToastService);
    const diaryentryService = inject(DiaryentryService);
    const encounterConnectionService = inject(EncounterConnectionService);
    const encounterService = inject(EncounterService);
    const globalStore = inject(GlobalStore);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );

    const updateEncounterList = (newEncounterList: Encounter[]) => {
      const newDiaryEntry = {
        ...(store.diaryentry() as DiaryEntry),
        encounters: newEncounterList,
      };
      patchState(store, { diaryentry: newDiaryEntry });
    };

    const markAsBeingUpdated = (encounterPk: number) => {
      const updatedIds = new Set(store._encountersInUpdateStateIds());
      updatedIds.add(encounterPk);
      patchState(store, { _encountersInUpdateStateIds: updatedIds });
    };

    const unmarkAsBeingUpdated = (encounterPk: number) => {
      const updatedIds = new Set(store._encountersInUpdateStateIds());
      updatedIds.delete(encounterPk);
      patchState(store, { _encountersInUpdateStateIds: updatedIds });
    };

    return {
      reset: () =>
        patchState(store, {
          diaryentry: undefined,
          diaryentryError: undefined,
          diaryEntryDeleteState: 'init',
          encounterServerModel: undefined,
          diaryentryQueryState: 'init',
        }),
      addEmptyEncounterForCreation: (encounter: EncounterRaw) => {
        patchState(store, {
          _encountersBeingCreated: [
            ...store._encountersBeingCreated(),
            encounter,
          ],
        });
      },
      removeEmptyEncounterForCreation: (encounter: EncounterRaw) => {
        patchState(store, {
          _encountersBeingCreated: store
            ._encountersBeingCreated()
            .filter((enc) => enc.order_index !== encounter.order_index),
        });
      },
      addEncounter: (encounter: EncounterRaw) => {
        encounterService
          .createForDiaryentry(encounter)
          .pipe(take(1))
          .subscribe({
            next: (newEncounterList) => {
              updateEncounterList(newEncounterList);
              patchState(store, {
                _encountersBeingCreated: store
                  ._encountersBeingCreated()
                  .filter((enc) => enc.order_index !== encounter.order_index),
              });
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
      removeEncounter: (encounter: Encounter) => {
        markAsBeingUpdated(encounter.pk);
        encounterService
          .delete(encounter.pk)
          .pipe(take(1))
          .subscribe({
            next: () => {
              unmarkAsBeingUpdated(encounter.pk);
              const newEncounterList =
                store
                  .diaryentry()
                  ?.encounters?.filter(
                    (listEnc) => listEnc.pk !== encounter.pk,
                  ) ?? [];
              updateEncounterList(newEncounterList);
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
      updateEncounter: (encounter: Encounter) => {
        markAsBeingUpdated(encounter.pk);
        encounterService
          .update(encounter.pk, encounter)
          .pipe(take(1))
          .subscribe({
            next: (newEncounter) => {
              unmarkAsBeingUpdated(encounter.pk);
              const diaryentry = store.diaryentry() as DiaryEntry;
              const newEncounterList = replaceItem(
                diaryentry.encounters ?? [],
                newEncounter,
                'pk',
              );
              updateEncounterList(newEncounterList);
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
      swapEncounters: (encounter1Pk: number, encounter2Pk: number) => {
        markAsBeingUpdated(encounter1Pk);
        markAsBeingUpdated(encounter2Pk);
        patchState(store, { isUpdatingGlobally: true });
        campaignName$
          .pipe(
            take(1),
            switchMap((campaignName) =>
              encounterService.swapEncounterOrder(
                campaignName,
                encounter1Pk,
                encounter2Pk,
              ),
            ),
          )
          .subscribe({
            next: ([updatedEnc1, updatedEnc2]) => {
              unmarkAsBeingUpdated(encounter1Pk);
              unmarkAsBeingUpdated(encounter2Pk);
              const newEncounterList1 = replaceItem(
                store.realEncounters(),
                updatedEnc1,
                'pk',
              );
              const newEncounterList2 = replaceItem(
                newEncounterList1,
                updatedEnc2,
                'pk',
              );
              updateEncounterList(newEncounterList2);
              patchState(store, { isUpdatingGlobally: false });
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
      cutInsertEncounter: (encounter: Encounter, newOrderIndex: number) => {
        markAsBeingUpdated(encounter.pk);
        patchState(store, { isUpdatingGlobally: true });
        campaignName$
          .pipe(
            take(1),
            switchMap((campaignName) =>
              encounterService.cutInsertEncounter(
                campaignName,
                encounter,
                newOrderIndex,
              ),
            ),
          )
          .subscribe({
            next: (newEncounterList) => {
              unmarkAsBeingUpdated(encounter.pk);
              updateEncounterList(newEncounterList);
              patchState(store, { isUpdatingGlobally: false });
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
      addEncounterConnection: (connection: EncounterConnectionRaw) =>
        encounterConnectionService
          .create(connection)
          .pipe(take(1))
          .subscribe({
            next: (newConnection) => {
              const diaryentry = store.diaryentry() as DiaryEntry;
              const encounter = diaryentry.encounters.find(
                (enc) => enc.pk === newConnection.encounter,
              ) as Encounter;
              const newEncounter = {
                ...encounter,
                encounterConnections: [
                  ...(encounter.encounterConnections ?? []),
                  newConnection,
                ],
              };
              const newEncounterList = replaceItem(
                diaryentry.encounters ?? [],
                newEncounter,
                'pk',
              );
              updateEncounterList(newEncounterList);
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          }),
      removeEncounterConnection: (connection: EncounterConnection) => {
        encounterConnectionService
          .delete(connection.pk as number)
          .pipe(take(1))
          .subscribe(() => {
            const diaryentry = store.diaryentry() as DiaryEntry;
            const encounter = diaryentry.encounters.find(
              (enc) => enc.pk === connection.encounter,
            ) as Encounter;
            const newEncounter = {
              ...encounter,
              encounterConnections: encounter.encounterConnections?.filter(
                (con) => con.pk !== connection.pk,
              ),
            };
            const newEncounterList = replaceItem(
              diaryentry.encounters ?? [],
              newEncounter,
              'pk',
            );
            updateEncounterList(newEncounterList);
          });
      },
      deleteDiaryEntry: () => {
        patchState(store, { diaryEntryDeleteState: 'loading' });
        diaryentryService
          .delete(store.diaryentry()?.pk as number)
          .pipe(take(1))
          .subscribe({
            next: () =>
              patchState(store, {
                diaryentry: undefined,
                diaryentryError: undefined,
                diaryEntryDeleteState: 'success',
              }),
            error: (err: HttpErrorResponse) =>
              toastService.addToast(httpErrorToast(err)),
          });
      },
    };
  }),
  withHooks((store) => {
    return {
      onInit: () => {
        log('DiaryEntryPageStore', store);
      },
    };
  }),
);
