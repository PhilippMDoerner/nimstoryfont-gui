import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { flipInY } from 'src/design/animations/flip';
import {
  ButtonKind,
  ElementKind,
  ElementSize,
  toElementKind,
} from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

@Component({
    selector: 'app-confirmation-toggle-button',
    templateUrl: './confirmation-toggle-button.component.html',
    styleUrls: ['./confirmation-toggle-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, NgTemplateOutlet],
    animations: [flipInY]
})
export class ConfirmationToggleButtonComponent {
  confirmationQuestion = input.required<string>();
  icon = input<Icon>();
  text = input<string>();
  toggleType = input<ButtonKind>('DANGER-OUTLINE');
  toggleSize = input<ElementSize>('MEDIUM');
  confirmButtonType = computed<ElementKind>(
    () => toElementKind(this.toggleType()) ?? 'DANGER',
  );
  cancelButtonType = input<ElementKind>('SECONDARY');

  @Output() confirm: EventEmitter<null> = new EventEmitter();

  isActive = signal(false);

  toggle() {
    this.isActive.set(!this.isActive());
  }

  emitConfirmation() {
    if (!this.isActive) {
      return;
    }

    this.confirm.emit();
    this.toggle();
  }
}
