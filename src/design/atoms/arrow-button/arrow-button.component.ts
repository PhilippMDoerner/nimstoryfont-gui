import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
  standalone: true,
  imports: [NgClass, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowButtonComponent {
  icon = input.required<'up' | 'down'>();
  type = input<ElementType>('SECONDARY');
  outline = input<boolean>(false);
  disabled = input<boolean>(false);

  iconName = computed<Icon>(() => `arrow-${this.icon()}-long`);
}
