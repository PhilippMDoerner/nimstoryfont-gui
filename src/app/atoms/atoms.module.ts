import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SpinnerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    IconComponent,
  ]
})
export class AtomsModule { }
