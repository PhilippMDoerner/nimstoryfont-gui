import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() heading!: string;
  
  @Output() modalClose: EventEmitter<null> = new EventEmitter();
  
  constructor(
    private modalService: NgbModal,
  ){}
  
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result
      .then(
        (result) => this.modalClose.emit(),
        (reason) => this.modalClose.emit(),
      );
  }
}
