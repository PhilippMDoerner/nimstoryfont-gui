import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { InteractiveBadgeComponent } from './interactive-badge/interactive-badge.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SpinnerComponent,
    BadgeComponent,
    InteractiveBadgeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
  ]
})
export class AtomsModule { }
