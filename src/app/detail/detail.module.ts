import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { EncounterAccordionComponent } from './encounter-accordion/encounter-accordion.component';
import { EncounterComponent } from './encounter/encounter.component';
import { ImageCarouselCardComponent } from './image-carousel-card/image-carousel-card.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgxLeafletMapComponent } from './ngx-leaflet-map/ngx-leaflet-map.component';
import { LocationComponent } from './location/location.component';
import { LocationAccordionComponent } from './location-accordion/location-accordion.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFieldComponent } from './quote-field/quote-field.component';
import { SessionComponent } from './session/session.component';
import { RuleComponent } from './rule/rule.component';
import { SpellComponent } from './spell/spell.component';
import { SessionaudioCardComponent } from './sessionaudio-card/sessionaudio-card.component';
import { DiaryentryEncountersComponent } from './diaryentry-encounters/diaryentry-encounters.component';



@NgModule({
  declarations: [
    ImageCarouselComponent,
    ImageCarouselCardComponent,
    NgxLeafletMapComponent,
    EncounterAccordionComponent,
    EncounterComponent,
    LocationComponent,
    LocationAccordionComponent,
    QuoteComponent,
    QuoteFieldComponent,
    SessionComponent,
    RuleComponent,
    SpellComponent,
    SessionaudioCardComponent,
    DiaryentryEncountersComponent
  ],
  imports: [
    CommonModule,
    LeafletModule,
    FormsModule,
    OrganismsModule,
    ReactiveFormsModule,
    FormlyModule
  ],
  exports: [
    ImageCarouselComponent,
    ImageCarouselCardComponent,
    NgxLeafletMapComponent,
  ]
})
export class DetailModule { }
