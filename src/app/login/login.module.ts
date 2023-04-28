import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../detail';
import { SearchHitComponent } from './search-hit/search-hit.component';
import { QuestTableComponent } from './quest-table/quest-table.component';



@NgModule({
  declarations: [
    SearchHitComponent,
    QuestTableComponent
  ],
  imports: [
    OrganismsModule,
    CommonModule
  ]
})
export class LoginModule { }
