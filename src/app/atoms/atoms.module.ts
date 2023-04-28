import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SafeHtmlPipe } from '../_pipes/safeHtml';
import { AlertComponent } from './alert/alert.component';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HtmlTextComponent } from './html-text/html-text.component';
import { IconComponent } from './icon/icon.component';
import { InfoCircleTooltipComponent } from './info-circle-tooltip/info-circle-tooltip.component';
import { InteractiveBadgeComponent } from './interactive-badge/interactive-badge.component';
import { SeparatorComponent } from './separator/separator.component';
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
    SeparatorComponent,
    HtmlTextComponent,
    CardComponent,
    SafeHtmlPipe,
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
    SeparatorComponent,
    HtmlTextComponent,
    CardComponent,
    SafeHtmlPipe,
    NgbModule,
    RouterModule,
  ]
})
export class AtomsModule { }
