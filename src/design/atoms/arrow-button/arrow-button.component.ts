import { Component, computed, input, Input } from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss'],
})
export class ArrowButtonComponent {
  icon = input.required<'up' | 'down'>();
  @Input() type: ElementType = 'SECONDARY';
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;

  iconName = computed<Icon>(() => `arrow-${this.icon()}-long`);
}
