import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { ButtonKind, ElementKind, ElementSize } from '../_models/button';
import { Icon } from '../_models/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-toggle-button',
  imports: [ButtonComponent],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleButtonComponent {
  kind = input.required<ElementKind>();
  active = input.required<boolean>();
  ariaLabel = input<string>();
  ariaControls = input<string>();
  title = input<string>();
  disabled = input<boolean>(false);
  icon = input<Icon>();
  text = input<string>();
  size = input<ElementSize>('MEDIUM');

  changed = output<boolean>();

  inactiveElementKind = computed(() => `${this.kind()}-OUTLINE` as ButtonKind);
}
