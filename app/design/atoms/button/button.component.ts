import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ButtonKind, ElementSize } from '../_models/button';
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
    }
})
export class ButtonComponent {
  kind = input.required<ButtonKind>();
  text = input<string>();
  icon = input<Icon>();
  size = input<ElementSize>('MEDIUM');
  type = input<'button' | 'reset' | 'submit'>('button');
  isLoading = input<boolean>(false);
  disabled = input<boolean>(false);

  sizeClass = computed(() => {
    switch (this.size()) {
      case 'SMALL':
        return 'btn-sm';
      case 'MEDIUM':
        return '';
      case 'LARGE':
        return 'btn-lg';
    }
  });

  kindClasses = computed(() => {
    switch (this.kind()) {
      case 'PRIMARY':
        return 'btn-primary';
      case 'SECONDARY':
        return 'btn-secondary';
      case 'DARK':
        return 'btn-dark';
      case 'WARNING':
        return 'btn-warning';
      case 'DANGER':
        return 'btn-danger';
      case 'LIGHT':
        return 'btn-light';
      case 'INFO':
        return 'btn-info';
      case 'PRIMARY-OUTLINE':
        return 'btn-outline-primary';
      case 'SECONDARY-OUTLINE':
        return 'btn-outline-secondary';
      case 'DARK-OUTLINE':
        return 'btn-outline-dark';
      case 'WARNING-OUTLINE':
        return 'btn-outline-warning';
      case 'DANGER-OUTLINE':
        return 'btn-outline-danger';
      case 'LIGHT-OUTLINE':
        return 'btn-outline-light';
      case 'INFO-OUTLINE':
        return 'btn-outline-info';
      case 'NONE':
        return 'btn-none';
    }
  });

  btnClass = computed(() => (this.kind() !== 'NONE' ? 'btn' : ''));

  classes = computed(
    () => `${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`,
  );
}
