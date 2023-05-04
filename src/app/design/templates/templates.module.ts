import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { MapComponent } from './map/map.component';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [
    MapComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ]
})
export class TemplatesModule { }
