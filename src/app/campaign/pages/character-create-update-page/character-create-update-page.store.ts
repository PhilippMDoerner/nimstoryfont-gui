import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe, shareReplay, switchMap, take, tap } from 'rxjs';
import {
  CharacterDetails,
  CharacterRaw,
  OrganizationMembership,
} from 'src/app/_models/character';
import { CharacterPlayerClassConnectionRaw } from 'src/app/_models/playerclass';
import { CharacterPlayerClassConnectionService } from 'src/app/_services/article/character-player-class-connection.service';
import { CharacterService } from 'src/app/_services/article/character.service';
import { LocationService } from 'src/app/_services/article/location.service';
import { OrganizationMembershipService } from 'src/app/_services/article/organization-membership.service';
import { OrganizationService } from 'src/app/_services/article/organization.service';
import { PlayerClassService } from 'src/app/_services/article/player-class.service';
import { WarningsService } from 'src/app/_services/utils/warnings.service';
import { GlobalStore } from 'src/app/global.store';
import { sortByProp } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { handleError } from 'src/utils/store/toServerModel';
import { withQueries } from 'src/utils/store/withQueries';
export interface CharacterCreateUpdateState {
  serverModel: CharacterDetails | undefined;
}

const initialState: CharacterCreateUpdateState = {
  serverModel: undefined,
};

export const CharacterCreateUpdateStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withQueries(() => {
    const globalStore = inject(GlobalStore);
    const characterService = inject(CharacterService);
    const playerClassService = inject(PlayerClassService);
    const locationService = inject(LocationService);
    const organizationService = inject(OrganizationService);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
      take(1),
    );

    return {
      character: (name: string) =>
        campaignName$.pipe(
          switchMap((campaign) =>
            characterService.readByParam(campaign, { name }),
          ),
        ),
      playerClasses: () => playerClassService.list(),
      campaignOrganizations: () =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            organizationService.campaignList(campaignName),
          ),
        ),
      campaignLocations: () =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            locationService.campaignList(campaignName),
          ),
          map((list) => sortByProp(list, 'name_full')),
        ),
    };
  }),
  withMethods((store) => {
    const characterService = inject(CharacterService);
    const playerClassConnectionService = inject(
      CharacterPlayerClassConnectionService,
    );
    const organizationMembershipService = inject(OrganizationMembershipService);
    const warningService = inject(WarningsService);
    return {
      updateCharacter: rxMethod<CharacterDetails>(
        pipe(
          tap(() => patchState(store, { characterQueryState: 'loading' })),
          switchMap((data) => characterService.update(data.pk as number, data)),
          tapResponse({
            next: (updatedData) =>
              patchState(store, {
                character: updatedData,
                characterQueryState: 'success',
              }),
            error: (err: HttpErrorResponse) =>
              handleError(store, err, warningService),
          }),
        ),
      ),
      createCharacter: rxMethod<CharacterRaw>(
        pipe(
          tap(() => patchState(store, { characterQueryState: 'loading' })),
          switchMap((data) => characterService.create(data)),
          tapResponse({
            next: (createdData) =>
              patchState(store, {
                character: createdData,
                characterQueryState: 'success',
              }),
            error: (err: HttpErrorResponse) =>
              handleError(store, err, warningService),
          }),
        ),
      ),
      addClass: rxMethod<number>(
        pipe(
          switchMap((classId) => {
            const connection: CharacterPlayerClassConnectionRaw = {
              character: store.character()?.pk as number,
              player_class: classId,
            };
            return playerClassConnectionService.create(connection);
          }),
          tapResponse({
            next: (newConnection) => {
              const newCharacter = {
                ...store.character(),
                player_class_connections: [
                  ...(store.character()?.player_class_connections ?? []),
                  newConnection,
                ],
              } as CharacterDetails;
              patchState(store, { character: newCharacter });
            },
            error: warningService.showWarning,
          }),
        ),
      ),
      removeClass: rxMethod<number>(
        pipe(
          switchMap((connectionId) =>
            playerClassConnectionService
              .delete(connectionId)
              .pipe(map(() => connectionId)),
          ),
          tapResponse({
            next: (connectionId) => {
              const newCharacter = {
                ...store.character(),
                player_class_connections: store
                  .character()
                  ?.player_class_connections?.filter(
                    (connection) => connection.pk !== connectionId,
                  ),
              } as CharacterDetails;
              patchState(store, { character: newCharacter });
            },
            error: warningService.showWarning,
          }),
        ),
      ),
      addOrganizationMembership: rxMethod<OrganizationMembership>(
        pipe(
          switchMap((membership) =>
            organizationMembershipService.create(membership),
          ),
          tapResponse({
            next: (character) => patchState(store, { character }),
            error: warningService.showWarning,
          }),
        ),
      ),
      removeOrganizationMembership: rxMethod<OrganizationMembership>(
        pipe(
          switchMap((membership) =>
            organizationMembershipService
              .delete(membership.pk as number)
              .pipe(map(() => membership)),
          ),
          tapResponse({
            next: (membership) => {
              const newCharacter: CharacterDetails = {
                ...(store.character() as CharacterDetails),
                organizations: store
                  .character()
                  ?.organizations?.filter(
                    (org) => org.organization_id !== membership.organization_id,
                  ),
              };
              patchState(store, { character: newCharacter });
            },
            error: warningService.showWarning,
          }),
        ),
      ),
    };
  }),
);
