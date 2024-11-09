import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementType } from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NgbModule],
})
export class ConfirmationModalComponent<T> {
  heading = input.required<string>();
  confirmValue = input.required<T>();
  submitIcon = input.required<Icon>();
  modalType = input<ElementType>('PRIMARY');
  cancelButtonType = input<ElementType>('SECONDARY');
  submitButtonLabel = input<string>('Yes');
  cancelButtonLabel = input<string>('No');

  modalClass = computed(
    () => `modal-border--${this.modalType().toLowerCase()}`,
  );
  @Output() modalClose: EventEmitter<null> = new EventEmitter();
  @Output() confirm: EventEmitter<T> = new EventEmitter();
  @Output() cancel: EventEmitter<T> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
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
