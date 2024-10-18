import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { switchMap, take } from 'rxjs';
import {
  CharacterDetails,
  CharacterEncounter,
  CharacterOrganizationMembership,
} from 'src/app/_models/character';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote, QuoteConnection, QuoteRaw } from 'src/app/_models/quote';
import { CharacterService } from 'src/app/_services/article/character.service';
import { EncounterConnectionService } from 'src/app/_services/article/encounter-connection.service';
import { EncounterService } from 'src/app/_services/article/encounter.service';
import { ImageUploadService } from 'src/app/_services/article/image-upload.service';
import { OrganizationMembershipService } from 'src/app/_services/article/organization-membership.service';
import { OrganizationService } from 'src/app/_services/article/organization.service';
import { QuoteConnectionService } from 'src/app/_services/article/quote-connection.service';
import { QuoteService } from 'src/app/_services/article/quote.service';
import { GlobalStore } from 'src/app/global.store';
import { findByProp, removeByProp, replaceItem } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';

export interface CharacterPageState {
  character: CharacterDetails | undefined;
  encounterServerModel: Encounter | undefined;
  characterQuote: Quote | undefined;
  campaignCharacters: OverviewItem[];
  campaignOrganizations: OverviewItem[];
  imageServerModel: Image | undefined;
  quoteServerModel: Quote | undefined;
}

const initialState: CharacterPageState = {
  campaignCharacters: [],
  campaignOrganizations: [],
  character: undefined,
  characterQuote: undefined,
  encounterServerModel: undefined,
  imageServerModel: undefined,
  quoteServerModel: undefined,
};

export const CharacterStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withMethods((state) => {
    const characterService = inject(CharacterService);
    const membershipService = inject(OrganizationMembershipService);
    const quoteService = inject(QuoteService);
    const imageService = inject(ImageUploadService);
    const encounterService = inject(EncounterService);
    const quoteConnectionService = inject(QuoteConnectionService);
    const encounterConnectionService = inject(EncounterConnectionService);
    const organizationService = inject(OrganizationService);
    const globalStore = inject(GlobalStore);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
    );
    return {
      loadCharacter: (name: string) => {
        patchState(state, { character: undefined });
        campaignName$
          .pipe(
            switchMap((campaignName) =>
              characterService.readByParam(campaignName, { name }),
            ),
            take(1),
          )
          .subscribe((character) => patchState(state, { character }));
      },
      loadCharacters: () => {
        patchState(state, { campaignCharacters: [] });
        campaignName$
          .pipe(
            switchMap((campaignName) =>
              characterService.campaignList(campaignName),
            ),
            take(1),
          )
          .subscribe((campaignCharacters) =>
            patchState(state, { campaignCharacters }),
          );
      },
      loadOrganizations: () => {
        patchState(state, { campaignOrganizations: [] });
        campaignName$
          .pipe(
            take(1),
            switchMap((campaignName) =>
              organizationService.campaignList(campaignName),
            ),
            take(1),
          )
          .subscribe((orgs) =>
            patchState(state, { campaignOrganizations: orgs }),
          );
      },
      loadRandomQuote: (name: string) => {
        patchState(state, { characterQuote: undefined });
        campaignName$
          .pipe(
            switchMap((campaignName) =>
              quoteService.getRandomQuote(campaignName, name),
            ),
            take(1),
          )
          .subscribe((characterQuote) => patchState(state, { characterQuote }));
      },
      deleteCharacater: () => {
        const characterPk = state.character()?.pk;
        if (characterPk == null) return;
        characterService
          .delete(characterPk)
          .pipe(take(1))
          .subscribe(() => patchState(state, { character: undefined }));
      },
      createImage: (img: Image) => {
        imageService
          .create({
            ...img,
            character_article: state.character()?.pk as number,
          })
          .pipe(take(1))
          .subscribe((newImage) => {
            const updatedChar = state.character();
            updatedChar?.images?.push(newImage);
            patchState(state, { character: updatedChar });
          });
      },
      deleteImage: (imgPk: number) => {
        imageService
          .delete(imgPk)
          .pipe(take(1))
          .subscribe(() => {
            const updatedChar = state.character();
            if (updatedChar == null) return;
            updatedChar.images = updatedChar.images?.filter(
              (img) => img.pk !== imgPk,
            );
            patchState(state, { character: updatedChar });
          });
      },
      updateImage: (img: Image) => {
        imageService.patch(img.pk, img).subscribe({
          next: (newImg) => {
            const updatedChar = state.character();
            if (updatedChar == null) return;
            updatedChar.images = replaceItem(
              updatedChar.images ?? [],
              newImg,
              'pk',
            );
            patchState(state, { character: updatedChar });
          },
          error: (err: HttpErrorResponse) => {
            if (err.status !== 401) return;
            const serverModel: Image = err.error;
            patchState(state, { imageServerModel: serverModel });
          },
        });
      },
      createQuote(quote: QuoteRaw) {
        quoteService
          .create(quote)
          .pipe(take(1))
          .subscribe((newQuote) =>
            patchState(state, { characterQuote: newQuote }),
          );
      },
      updateQuote(quote: Quote) {
        quoteService
          .update(quote.pk, quote)
          .pipe(take(1))
          .subscribe((newQuote) =>
            patchState(state, { characterQuote: newQuote }),
          );
      },
      deleteQuote(quotePk: number) {
        quoteService
          .delete(quotePk)
          .pipe(take(1))
          .subscribe(() => {
            patchState(state, { characterQuote: undefined });
          });
      },
      createQuoteConnection(connection: QuoteConnection) {
        quoteConnectionService
          .create(connection)
          .pipe(take(1))
          .subscribe((newConnection) => {
            const newQuote = state.characterQuote();
            newQuote?.connections?.push(newConnection);
            patchState(state, { characterQuote: newQuote });
          });
      },
      deleteQuoteConnection(connectionPk: number) {
        quoteConnectionService
          .delete(connectionPk)
          .pipe(take(1))
          .subscribe(() => {
            const newQuote = state.characterQuote();
            if (newQuote == null) return;
            newQuote.connections = newQuote.connections?.filter(
              (connection) => connection.pk !== connectionPk,
            );
            patchState(state, { characterQuote: newQuote });
          });
      },
      updateEncounter(encounter: Encounter) {
        encounterService
          .patch(encounter.pk, encounter)
          .pipe(take(1))
          .subscribe((newEncounter) => {
            const updatedChar = state.character();
            updatedChar?.encounters?.push(newEncounter);
            patchState(state, { character: updatedChar });
          });
      },
      deleteEncounter(encounterPk: number) {
        encounterService
          .delete(encounterPk)
          .pipe(take(1))
          .subscribe(() => {
            const updatedChar = state.character();
            if (updatedChar == null) return;
            updatedChar.encounters = updatedChar.encounters?.filter(
              (encounter) => encounter.pk !== encounterPk,
            );
            patchState(state, { character: updatedChar });
          });
      },
      createEncounterConnection(connection: EncounterConnection) {
        encounterConnectionService
          .create(connection)
          .pipe(take(1))
          .subscribe((newConnection) => {
            const updatedCharacter = state.character();
            if (updatedCharacter == null) return;
            const updatedEncounter = updatedCharacter.encounters?.find(
              (encounter) => encounter.pk === connection.encounter,
            ) as CharacterEncounter;
            updatedEncounter.encounterConnections?.push(newConnection);
            const updatedEncounters = replaceItem<CharacterEncounter>(
              updatedCharacter.encounters ?? [],
              updatedEncounter,
              'pk',
            );
            updatedCharacter.encounters = updatedEncounters;
            patchState(state, { character: updatedCharacter });
          });
      },
      deleteEncounterConnection(connection: EncounterConnection) {
        encounterConnectionService
          .delete(connection.pk as number)
          .pipe(take(1))
          .subscribe(() => {
            const updatedCharacter = state.character();
            if (updatedCharacter == null) return;

            const updatedEncounter = findByProp(
              updatedCharacter.encounters ?? [],
              'pk',
              connection.pk,
            ) as CharacterEncounter;
            updatedEncounter.encounterConnections = removeByProp(
              updatedEncounter.encounterConnections ?? [],
              'pk',
              connection.pk,
            );

            const updatedEncounters = replaceItem<CharacterEncounter>(
              updatedCharacter.encounters ?? [],
              updatedEncounter,
              'pk',
            );
            updatedCharacter.encounters = updatedEncounters;
            patchState(state, { character: updatedCharacter });
          });
      },
      createMembership(membership: CharacterOrganizationMembership) {
        membershipService
          .create({
            member_id: state.character()?.pk as number,
            organization_id: membership.organization_id,
            role: membership.role,
          })
          .pipe(take(1))
          .subscribe((updatedCharacter) => {
            patchState(state, { character: updatedCharacter });
          });
      },
      deleteMembership(membership: CharacterOrganizationMembership) {
        membershipService
          .delete(membership.pk as number)
          .pipe(take(1))
          .subscribe(() => {
            const updatedChar = state.character();
            if (updatedChar == null) return;
            updatedChar.organizations = updatedChar.organizations?.filter(
              (org) => org.organization_id !== membership.organization_id,
            );
            patchState(state, { character: { ...updatedChar } });
          });
      },
    };
  }),
  withHooks((store) => {
    const character$ = toObservable(store.character).pipe(filterNil());
    return {
      onInit: () => {
        character$.pipe(takeUntilDestroyed()).subscribe((character) => {
          store.loadRandomQuote(character.name as string);
        });
      },
    };
  }),
);
