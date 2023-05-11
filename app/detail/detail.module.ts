import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { OrganismsModule } from '../design/organisms';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    LeafletModule,
    OrganismsModule,
    ReactiveFormsModule,
  ],
  exports: []
})
export class DetailModule { }
