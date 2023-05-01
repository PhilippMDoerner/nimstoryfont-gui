import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../detail';
import { QuestTableComponent } from './quest-table/quest-table.component';
import { SearchHitComponent } from './search-hit/search-hit.component';
import { SpellComponent } from './spell/spell.component';
import { SpellsComponentComponent } from './spells.component/spells.component.component';



@NgModule({
  declarations: [
    SearchHitComponent,
    QuestTableComponent,
    SpellComponent,
    SpellsComponentComponent
  ],
  imports: [
    OrganismsModule,
    CommonModule
  ]
})
export class LoginModule { }
