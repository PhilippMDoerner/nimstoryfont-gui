import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CharacterEncounter } from 'src/app/_models/character';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { Quote, QuoteConnection } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { environment } from 'src/environments/environment';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { CharacterStore } from './character-page.store';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [TemplatesModule, AsyncPipe, JsonPipe],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
})
export class CharacterPageComponent {
  private store = inject(CharacterStore);
  private routingService = inject(RoutingService);

  serverUrl = environment.backendDomain;
  character$ = this.store.character;
  campaignCharacters$ = this.store.campaignCharacters;
  characterQuote$ = this.store.characterQuote;
  quoteServerModel$ = this.store.quoteServerModel;
  imageServerModel$ = this.store.imageServerModel;
  encounterServerModel$ = this.store.encounterServerModel;
  hasWritePermission$ = this.store.hasWritePermission;

  onCharacterDelete() {
    this.store.deleteCharacater();
    this.routingService.routeToPath('character-overview');
  }

  onCreateImage(img: Image) {
    this.store.createImage(img);
  }

  onDeleteImage(img: Image) {
    this.store.deleteImage(img.pk as number);
  }

  onUpdateImage(img: Image) {
    this.store.updateImage(img);
  }

  onCreateQuote(quote: Quote) {
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
    this.store.loadRandomQuote(this.store.character()?.name as string);
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
}
