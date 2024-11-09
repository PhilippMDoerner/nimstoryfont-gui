import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GroupByFirstLetterPipe, GroupByPipe } from './_pipes/groupObjects';
import { SafeHtmlPipe } from './_pipes/safeHtml';
import { AlertComponent } from './alert/alert.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
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
  declarations: [],
  imports: [
    SpinnerComponent,
    CardComponent,
    SafeHtmlPipe,
    InfoCircleTooltipComponent,
    InteractiveBadgeComponent,
    SeparatorComponent,
    GroupByFirstLetterPipe,
    GroupByPipe,
    CommonModule,
    NgbModule,
    RouterModule,
    AlertComponent,
    ArrowButtonComponent,
    IconComponent,
    BadgeComponent,
    ButtonComponent,
    HtmlTextComponent,
  ],
  exports: [
    ArrowButtonComponent,
    BadgeComponent,
    ButtonComponent,
    CardComponent,
    GroupByFirstLetterPipe,
    GroupByPipe,
    HtmlTextComponent,
    IconComponent,
    InfoCircleTooltipComponent,
    InteractiveBadgeComponent,
    NgbModule,
    RouterModule,
    SafeHtmlPipe,
    SeparatorComponent,
    SpinnerComponent,
    AlertComponent,
  ],
})
export class AtomsModule {}
