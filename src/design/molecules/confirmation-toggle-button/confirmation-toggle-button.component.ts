import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  input,
  Output,
  signal,
  ViewChild,
} from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import { ElementSize, ElementType } from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

@Component({
  selector: 'app-confirmation-toggle-button',
  templateUrl: './confirmation-toggle-button.component.html',
  styleUrls: ['./confirmation-toggle-button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NgTemplateOutlet],
})
export class ConfirmationToggleButtonComponent {
  confirmationQuestion = input.required<string>();
  icon = input<Icon>();
  text = input<string>();
  toggleType = input<ElementType>('DANGER');
  toggleSize = input<ElementSize>('MEDIUM');
  cancelButtonType = input<ElementType>('SECONDARY');

  @Output() confirm: EventEmitter<null> = new EventEmitter();

  @ViewChild('toggleElement') toggleElement!: ElementRef;

  isActive = signal(false);

  toggle() {
    this.isActive.set(!this.isActive());
    animateElement(this.toggleElement.nativeElement, 'flipInY');
  }

  emitConfirmation() {
    if (!this.isActive) {
      return;
    }

    this.confirm.emit();
    this.toggle();
  }
}
