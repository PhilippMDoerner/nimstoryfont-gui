import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, NgClass, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  type = input.required<ElementType>();
  text = input.required<string>();
  icon = input<Icon>();
  clickable = input(false);

  @Output() badgeClick = new EventEmitter<void>();
}
