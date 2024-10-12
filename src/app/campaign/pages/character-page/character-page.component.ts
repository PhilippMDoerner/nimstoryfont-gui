import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { combineLatest, firstValueFrom, switchMap, take } from 'rxjs';
import {
  CharacterDetails,
  CharacterEncounter,
} from 'src/app/_models/character';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { Quote, QuoteConnection } from 'src/app/_models/quote';
import { CharacterService } from 'src/app/_services/article/character.service';
import { EncounterConnectionService } from 'src/app/_services/article/encounter-connection.service';
import { EncounterService } from 'src/app/_services/article/encounter.service';
import { ImageUploadService } from 'src/app/_services/article/image-upload.service';
import { QuoteConnectionService } from 'src/app/_services/article/quote-connection.service';
import { QuoteService } from 'src/app/_services/article/quote.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { environment } from 'src/environments/environment';
import { filterNil, mapServerModel } from 'src/utils/rxjs-operators';
import { TemplatesModule } from '../../../../design/templates/templates.module';

@Component({
  selector: 'app-character-page',
  standalone: true,
  imports: [TemplatesModule, AsyncPipe, JsonPipe],
  templateUrl: './character-page.component.html',
  styleUrl: './character-page.component.scss',
})
export class CharacterPageComponent {
  private characterService = inject(CharacterService);
  private quoteService = inject(QuoteService);
  private imageService = inject(ImageUploadService);
  private encounterService = inject(EncounterService);
  private tokenService = inject(TokenService);
  private paramsService = inject(GlobalUrlParamsService);
  private quoteConnectionService = inject(QuoteConnectionService);
  private encounterConnectionService = inject(EncounterConnectionService);

  serverUrl = environment.backendDomain;
  character$ = this.characterService.read.data$;
  campaignCharacters$ = this.characterService.campaignList.data$;
  characterQuote$ = this.quoteService.randomQuote.data$;
  quoteServerModel$ =
    this.quoteService.randomQuote.error$.pipe(mapServerModel<Quote>());
  imageServerModel$ =
    this.imageService.update.error$.pipe(mapServerModel<Image>());
  encounterServerModel$ =
    this.encounterService.update.error$.pipe(mapServerModel<Encounter>());
  hasWritePermission$ = this.paramsService.campaignNameParam$.pipe(
    filterNil(),
    switchMap((name) => this.tokenService.isCampaignMember(name)),
  );

  onCharacterDelete(character: CharacterDetails) {
    this.characterService.runDelete(character.pk as number);
  }

  async onCreateImage(img: Image) {
    const character = await firstValueFrom(this.character$);

    this.imageService.runCreate({
      ...img,
      character_article: character?.pk as number,
    });

    this.reloadCharacter();
  }

  onDeleteImage(img: Image) {
    this.imageService.runDelete(img.pk as number);
    this.reloadCharacter();
  }

  onUpdateImage(img: Image) {
    this.imageService.runPatch(img.pk as number, img);
    this.reloadCharacter();
  }

  onCreateQuote(quote: Quote) {
    this.quoteService.runCreate(quote);
  }

  onUpdateQuote(quote: Quote) {
    if (!quote.pk) return;

    this.quoteService.runUpdate(quote.pk, {
      ...quote,
      pk: quote.pk as number,
    });
  }

  onDeleteQuote(quote: Quote) {
    this.quoteService.runDelete(quote.pk as number);
  }

  onRefreshQuote() {
    combineLatest({
      campaignName: this.paramsService.campaignNameParam$.pipe(filterNil()),
      character: this.character$.pipe(filterNil()),
    })
      .pipe(take(1))
      .subscribe(({ campaignName, character }) => {
        this.quoteService.loadRandomQuote(
          campaignName,
          character.name as string,
        );
      });
  }

  onCreateQuoteConnection(connection: QuoteConnection) {
    this.quoteConnectionService.runCreate(connection);
    this.reloadCharacter();
  }

  onDeleteQuoteConnection(connection: QuoteConnection) {
    this.quoteConnectionService.runDelete(connection.pk as number);
    this.reloadCharacter();
  }

  onDeleteEncounter(encounter: CharacterEncounter) {
    this.encounterService.runDelete(encounter.pk as number);
    this.reloadCharacter();
  }

  onUpdateEncounter(encounter: CharacterEncounter) {
    this.encounterService.runPatch(encounter.pk as number, encounter);
    this.reloadCharacter();
  }

  onCreateEncounterConnection(connection: EncounterConnection) {
    this.encounterConnectionService.runCreate(connection);
    this.reloadCharacter();
  }

  onDeleteEncounterConnection(connection: EncounterConnection) {
    this.encounterConnectionService.runDelete(connection.pk as number);
    this.reloadCharacter();
  }

  private async reloadCharacter() {
    const character = await firstValueFrom(this.character$);
    this.characterService.loadRead(character?.pk as number);
  }
}
