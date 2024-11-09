import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-interactive-badge',
  templateUrl: './interactive-badge.component.html',
  styleUrls: ['./interactive-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterLink, NgClass, IconComponent],
})
export class InteractiveBadgeComponent {
  type = input.required<ElementType>();
  text = input.required<string>();
  textLink = input<string>();
  icon = input<Icon>();
  iconType = input<ElementType>();

  iconTypeVal = computed(() => this.iconType() ?? this.type());

  @Output() iconClick: EventEmitter<null> = new EventEmitter();
  @Output() labelClick: EventEmitter<null> = new EventEmitter();
}
