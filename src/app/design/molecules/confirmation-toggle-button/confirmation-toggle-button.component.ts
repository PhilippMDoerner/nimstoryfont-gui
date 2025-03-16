import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import {
  ButtonKind,
  ElementKind,
  ElementSize,
  toElementKind,
} from 'src/app/design/atoms/_models/button';
import { Icon } from 'src/app/design/atoms/_models/icon';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-confirmation-toggle-button',
  templateUrl: './confirmation-toggle-button.component.html',
  styleUrls: ['./confirmation-toggle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, HotkeyDirective, ConfirmationModalComponent],
})
export class ConfirmationToggleButtonComponent {
  confirmationQuestion = input.required<string>();
  icon = input<Icon>();
  text = input<string>();
  enableHotkey = input<boolean>(true);
  toggleType = input<ButtonKind>('DANGER-OUTLINE');
  toggleSize = input<ElementSize>('MEDIUM');
  cancelButtonType = input<ElementKind>('SECONDARY');

  confirmButtonType = computed<ElementKind>(
    () => toElementKind(this.toggleType()) ?? 'DANGER',
  );

  modalService = inject(NgbModal);

  @Output() confirm: EventEmitter<null> = new EventEmitter();

  emitConfirmation() {
    this.confirm.emit();
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-title',
      modalDialogClass: 'border border-info border-3 rounded mymodal',
    });
  }
}
