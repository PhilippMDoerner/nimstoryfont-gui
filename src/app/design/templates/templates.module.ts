import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ]
})
export class TemplatesModule { }
