import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CharacterDetails } from 'src/app/_models/character';
import { Encounter } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote } from 'src/app/_models/quote';
import { CharacterService } from 'src/app/_services/article/character.service';
import { EncounterConnectionService } from 'src/app/_services/article/encounter-connection.service';
import { EncounterService } from 'src/app/_services/article/encounter.service';
import { ImageUploadService } from 'src/app/_services/article/image-upload.service';
import { QuoteConnectionService } from 'src/app/_services/article/quote-connection.service';
import { QuoteService } from 'src/app/_services/article/quote.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';

export interface CharacterPageState {
  character?: CharacterDetails;
  encounterServerModel?: Encounter;
  characterQuote?: Quote;
  campaignCharacters?: OverviewItem[];
  imageServerModel?: Image;
  quoteServerModel?: Quote;
  hasWritePermission?: boolean;
}

@Injectable()
export class CharacterStore extends ComponentStore<CharacterPageState> {
  private characterService = inject(CharacterService);
  private quoteService = inject(QuoteService);
  private imageService = inject(ImageUploadService);
  private encounterService = inject(EncounterService);
  private tokenService = inject(TokenService);
  private paramsService = inject(GlobalUrlParamsService);
  private quoteConnectionService = inject(QuoteConnectionService);
  private encounterConnectionService = inject(EncounterConnectionService);

  constructor() {
    super({});
  }
}
