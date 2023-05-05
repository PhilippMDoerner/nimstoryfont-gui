import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { MapComponent } from './map/map.component';
import { CharacterComponent } from './character/character.component';
import { CreatureComponent } from './creature/creature.component';
import { DiaryentryComponent } from './diaryentry/diaryentry.component';
import { ItemComponent } from './item/item.component';
import { LocationTemplateComponent } from './location-template/location-template.component';
import { OrganizationComponent } from './organization/organization.component';



@NgModule({
  declarations: [
    MapComponent,
    CharacterComponent,
    CreatureComponent,
    DiaryentryComponent,
    ItemComponent,
    LocationTemplateComponent,
    OrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ]
})
export class TemplatesModule { }
