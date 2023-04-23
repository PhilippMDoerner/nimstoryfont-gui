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



@NgModule({
  declarations: [
    ImageCarouselComponent,
    ImageCarouselCardComponent,
    NgxLeafletMapComponent,
    EncounterAccordionComponent,
    EncounterComponent,
    LocationComponent,
    LocationAccordionComponent
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
