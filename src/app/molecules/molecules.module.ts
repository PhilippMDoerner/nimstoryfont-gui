import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AtomsModule } from '../atoms/atoms.module';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { IconToggleButtonComponent } from './toggle-button/icon-toggle-button.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';



@NgModule({
  declarations: [
    EditToggleComponent,
    IconToggleButtonComponent,
    ConfirmationToggleButtonComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
  ]
})
export class MoleculesModule { }
