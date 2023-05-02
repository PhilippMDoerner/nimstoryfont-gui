import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { QuestTableComponent } from './quest-table/quest-table.component';
import { RuleComponent } from './rule/rule.component';
import { RulesComponent } from './rules/rules.component';
import { SearchHitComponent } from './search-hit/search-hit.component';
import { SessionComponent } from './session/session.component';
import { SessionaudioCardComponent } from './sessionaudio-card/sessionaudio-card.component';
import { SpellComponent } from './spell/spell.component';
import { SpellsComponent } from './spells.component/spells.component';



@NgModule({
  declarations: [
    QuestTableComponent,
    RuleComponent,
    RulesComponent,
    SearchHitComponent,
    SessionaudioCardComponent,
    SessionComponent,
    SpellComponent,
    SpellsComponent,
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ]
})
export class LoginModule { }
