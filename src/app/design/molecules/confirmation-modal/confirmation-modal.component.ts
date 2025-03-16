import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementKind } from 'src/app/design/atoms/_models/button';
import { Icon } from 'src/app/design/atoms/_models/icon';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { componentId } from 'src/utils/DOM';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NgbModule],
})
export class ConfirmationModalComponent<T> {
  heading = input.required<string>();
  confirmValue = input.required<T>();
  submitIcon = input<Icon>();
  modalType = input<ElementKind>('PRIMARY');
  cancelButtonType = input<ElementKind>('SECONDARY');
  submitButtonLabel = input<string>('Yes');
  cancelButtonLabel = input<string>('No');

  modalClass = computed(
    () => `modal-border--${this.modalType().toLowerCase()}`,
  );
  @Output() modalClose: EventEmitter<null> = new EventEmitter();
  @Output() confirm: EventEmitter<T> = new EventEmitter();
  @Output() cancel: EventEmitter<T> = new EventEmitter();

  id = componentId();
  bodyId = `${this.id}-body`;

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: this.id,
        ariaDescribedBy: this.bodyId,
        modalDialogClass: this.modalClass(),
      })
      .result.then(
        (result) => this.modalClose.emit(),
        (reason) => this.modalClose.emit(),
      );
  }

  onSubmit(modal: any) {
    this.confirm.emit(this.confirmValue());
    modal.close();
  }

  onCancel(modal: any) {
    this.cancel.emit(this.confirmValue());
    modal.close();
  }
}
