import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ButtonKind, ElementSize, toButtonClasses } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'button[btn]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent, SpinnerComponent],
  host: {
    '[class]': 'classes()',
    '[type]': 'type()',
    '[disabled]': 'isLoading() || disabled()',
  },
})
export class ButtonComponent {
  kind = input.required<ButtonKind>();
  text = input<string>();
  icon = input<Icon>();
  size = input<ElementSize>('MEDIUM');
  type = input<'button' | 'reset' | 'submit'>('button');
  isLoading = input<boolean>(false);
  disabled = input<boolean>(false);

  classes = computed(() => toButtonClasses(this.kind(), this.size()));
}
