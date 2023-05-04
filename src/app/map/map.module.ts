import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapRoutingModule } from './map-routing.module';
import { NgxLeafletMapComponent } from './ngx-leaflet-map/ngx-leaflet-map.component';



@NgModule({
  declarations: [
    NgxLeafletMapComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
  ]
})
export class MapModule { }
