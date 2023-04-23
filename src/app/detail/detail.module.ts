import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { OrganismsModule } from '../organisms/organisms.module';
import { EncounterCardComponent } from './encounter-card/encounter-card.component';
import { ImageCarouselCardComponent } from './image-carousel-card/image-carousel-card.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgxLeafletMapComponent } from './ngx-leaflet-map/ngx-leaflet-map.component';



@NgModule({
  declarations: [
    EncounterCardComponent,
    ImageCarouselComponent,
    ImageCarouselCardComponent,
    NgxLeafletMapComponent
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
    EncounterCardComponent,
    ImageCarouselComponent,
    ImageCarouselCardComponent,
    NgxLeafletMapComponent,
  ]
})
export class DetailModule { }
