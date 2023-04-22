import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from './icon/icon.component';
import { InfoCircleTooltipComponent } from './info-circle-tooltip/info-circle-tooltip.component';
import { InteractiveBadgeComponent } from './interactive-badge/interactive-badge.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    ButtonComponent,
    IconComponent,
    SpinnerComponent,
    BadgeComponent,
    InteractiveBadgeComponent,
    InfoCircleTooltipComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    ButtonComponent,
    IconComponent,
    SpinnerComponent,
    BadgeComponent,
    InteractiveBadgeComponent,
    InfoCircleTooltipComponent,
    AlertComponent,
  ]
})
export class AtomsModule { }
