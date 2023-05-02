import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { DiaryentryEncountersComponent } from './diaryentry-encounters/diaryentry-encounters.component';
import { EncounterAccordionComponent } from './encounter-accordion/encounter-accordion.component';
import { EncounterComponent } from './encounter/encounter.component';
import { ImageCarouselCardComponent } from './image-carousel-card/image-carousel-card.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { LocationAccordionComponent } from './location-accordion/location-accordion.component';
import { LocationComponent } from './location/location.component';
import { NgxLeafletMapComponent } from './ngx-leaflet-map/ngx-leaflet-map.component';
import { QuoteFieldComponent } from './quote-field/quote-field.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    DiaryentryEncountersComponent,
    EncounterAccordionComponent,
    EncounterComponent,
    ImageCarouselCardComponent,
    ImageCarouselComponent,
    LocationAccordionComponent,
    LocationComponent,
    NgxLeafletMapComponent,
    QuoteComponent,
    QuoteFieldComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    LeafletModule,
    OrganismsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ImageCarouselCardComponent,
    ImageCarouselComponent,
    NgxLeafletMapComponent,
  ]
})
export class DetailModule { }
