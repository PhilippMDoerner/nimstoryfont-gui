import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    LeafletModule,
  ]
})
export class MapModule { }
