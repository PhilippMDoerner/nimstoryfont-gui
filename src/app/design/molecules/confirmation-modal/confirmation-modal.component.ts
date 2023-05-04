import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ElementType, Icon } from '../../atoms';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {
  @Input() heading!: string;
  @Input() confirmValue: any;
  @Input() submitIcon?: Icon;
  @Input() modalType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() submitButtonLabel: string = 'Yes';
  @Input() cancelButtonLabel: string = 'No';
  
  @Output() modalClose: EventEmitter<null> = new EventEmitter();
  @Output() confirm: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private modalService: NgbModal,
  ){}
  
  open(content: any) {
    this.modalService.open(
      content, 
      {
        ariaLabelledBy: 'modal-basic-title',
        modalDialogClass: this.getModalClass(),
      }
    ).result
      .then(
        (result) => this.modalClose.emit(),
        (reason) => this.modalClose.emit(),
      );
  }
  
  getModalClass(): string{
    return`modal-border--${this.modalType.toLowerCase()}`
  }
  
  onSubmit(modal: any){
    this.confirm.emit(this.confirmValue);
    modal.close();
  }
  
  onCancel(modal: any){
    this.cancel.emit(this.confirmValue);
    modal.close();
  }
}
