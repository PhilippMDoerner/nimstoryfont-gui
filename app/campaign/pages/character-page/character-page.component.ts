import { Component, effect, inject } from '@angular/core';
import {
  CharacterDetails,
  CharacterEncounter,
} from 'src/app/_models/character';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { Quote, QuoteConnection, QuoteRaw } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CharacterComponent } from 'src/design/templates/character/character.component';
import { environment } from 'src/environments/environment';
import { CharacterStore } from './character-page.store';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [CharacterComponent],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
})
export class CharacterPageComponent {
  store = inject(CharacterStore);
  private globalStore = inject(GlobalStore);
  private routingService = inject(RoutingService);

  serverUrl = environment.backendDomain;

  constructor() {
    this.routeToOverviewOnMissingCharacter();
  }

  onCharacterDelete() {
    this.store.deleteCharacter();
    this.routingService.routeToPath('character-overview', {
      campaign: this.globalStore.campaignName(),
    });
  }

  onCreateImage(img: Image) {
    this.store.createImage(img, this.store.character()?.pk as number);
  }

  onDeleteImage(img: Image) {
    this.store.deleteImage(img.pk as number);
  }

  onUpdateImage(img: Image) {
    this.store.updateImage(img);
  }

  onCreateQuote(quote: QuoteRaw) {
    this.store.createQuote(quote);
  }

  onUpdateQuote(quote: Quote) {
    this.store.updateQuote(quote);
  }

  onDeleteQuote(quote: Quote) {
    this.store.deleteQuote(quote.pk);
    this.onRefreshQuote();
  }

  onRefreshQuote() {
    this.store.loadCharacterQuote(this.store.character()?.name as string);
  }

  onCreateQuoteConnection(connection: QuoteConnection) {
    this.store.createQuoteConnection(connection);
  }

  onDeleteQuoteConnection(connection: QuoteConnection) {
    this.store.deleteQuoteConnection(connection.pk as number);
  }

  onDeleteEncounter(encounter: CharacterEncounter) {
    this.store.deleteEncounter(encounter.pk as number);
  }

  onUpdateEncounter(encounter: CharacterEncounter) {
    this.store.updateEncounter(encounter as Encounter);
  }

  onCreateEncounterConnection(connection: EncounterConnection) {
    this.store.createEncounterConnection(connection);
  }

  onDeleteEncounterConnection(connection: EncounterConnection) {
    this.store.deleteEncounterConnection(connection);
  }

  onCharacterUpdate(char: CharacterDetails) {
    this.store.updateCharacter(char);
  }

  removeClass(classId: number | undefined) {
    const connection = this.store
      .character()
      ?.player_class_connections?.find(
        (connection) => connection.player_class === classId,
      );
    this.store.removeClass(connection?.pk as number);
  }

  private routeToOverviewOnMissingCharacter() {
    effect(() => {
      const characterDoesNotExist = this.store.characterError()?.status === 404;
      if (characterDoesNotExist) {
        this.routingService.routeToPath('character-overview', {
          campaign: this.globalStore.campaignName(),
        });
      }
    });
  }
}