import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ElementKind } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    imports: [NgTemplateOutlet, NgClass, IconComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BadgeComponent {
  kind = input.required<ElementKind>();
  text = input.required<string>();
  icon = input<Icon>();
  clickable = input(false);

  @Output() badgeClick = new EventEmitter<void>();
}
