import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../detail';
import { SearchHitComponent } from './search-hit/search-hit.component';



@NgModule({
  declarations: [
    SearchHitComponent
  ],
  imports: [
    OrganismsModule,
    CommonModule
  ]
})
export class LoginModule { }
