import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { CampaignAdminComponent } from './campaign-admin/campaign-admin.component';
import { CampaignOverviewComponent } from './campaign-overview/campaign-overview.component';
import { CharacterCreateUpdateComponent } from './character-create-update/character-create-update.component';
import { CharacterComponent } from './character/character.component';
import { ConfigTablesComponent } from './config-tables/config-tables.component';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { CreatureComponent } from './creature/creature.component';
import { DiaryentryComponent } from './diaryentry/diaryentry.component';
import { GeneralOverviewComponent } from './general-overview/general-overview.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LocationTemplateComponent } from './location-template/location-template.component';
import { MapComponent } from './map/map.component';
import { MarkerComponent } from './marker/marker.component';
import { OrganizationComponent } from './organization/organization.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestOverviewComponent } from './quest-overview/quest-overview.component';
import { QuestComponent } from './quest/quest.component';
import { RulesTemplateComponent } from './rules-template/rules-template.component';
import { SearchComponent } from './search/search.component';
import { SessionaudioComponent } from './sessionaudio/sessionaudio.component';
import { SiteAdminComponent } from './site-admin/site-admin.component';
import { SpellsTemplateComponent } from './spells-template/spells-template.component';



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
    CreateUpdateComponent,
    CharacterCreateUpdateComponent,
    ProfileComponent,
    CampaignOverviewComponent,
    CampaignAdminComponent,
    ConfigTablesComponent,
    SiteAdminComponent,
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ],
  exports: [
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
    CreateUpdateComponent,
    CharacterCreateUpdateComponent,
    ProfileComponent,
    CampaignOverviewComponent,
    CampaignAdminComponent,
    ConfigTablesComponent,
    SiteAdminComponent,
  ]
})
export class TemplatesModule { }
