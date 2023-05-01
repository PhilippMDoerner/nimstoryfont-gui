import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../organisms';
import { QuestTableComponent } from './quest-table/quest-table.component';
import { SearchHitComponent } from './search-hit/search-hit.component';
import { SpellComponent } from './spell/spell.component';
import { SpellsComponent } from './spells.component/spells.component';



@NgModule({
  declarations: [
    SearchHitComponent,
    QuestTableComponent,
    SpellComponent,
    SpellsComponent
  ],
  imports: [
    OrganismsModule,
    CommonModule
  ]
})
export class LoginModule { }
