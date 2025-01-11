import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ElementKind } from '../_models/button';
import { Icon } from '../_models/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
    selector: 'app-arrow-button',
    templateUrl: './arrow-button.component.html',
    styleUrls: ['./arrow-button.component.scss'],
    imports: [ButtonComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowButtonComponent {
  icon = input.required<'up' | 'down'>();
  kind = input<ElementKind>('SECONDARY');
  outline = input<boolean>(false);
  disabled = input<boolean>(false);

  iconName = computed<Icon>(() => `arrow-${this.icon()}-long`);
}
