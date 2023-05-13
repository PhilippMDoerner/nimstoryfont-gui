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
import { QuestComponent } from './quest/quest.component';
import { SessionaudioComponent } from './sessionaudio/sessionaudio.component';
import { SpellsTemplateComponent } from './spells-template/spells-template.component';
import { RulesTemplateComponent } from './rules-template/rules-template.component';
import { MarkerComponent } from './marker/marker.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { QuestOverviewComponent } from './quest-overview/quest-overview.component';
import { GeneralOverviewComponent } from './general-overview/general-overview.component';
import { CreateUpdateComponent } from './create-update/create-update.component';



@NgModule({
  declarations: [
    MapComponent,
    CharacterComponent,
    CreatureComponent,
    DiaryentryComponent,
    ItemComponent,
    LocationTemplateComponent,
    OrganizationComponent,
    QuestComponent,
    SessionaudioComponent,
    SpellsTemplateComponent,
    RulesTemplateComponent,
    MarkerComponent,
    HomeComponent,
    SearchComponent,
    QuestOverviewComponent,
    GeneralOverviewComponent,
    CreateUpdateComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ]
})
export class TemplatesModule { }
