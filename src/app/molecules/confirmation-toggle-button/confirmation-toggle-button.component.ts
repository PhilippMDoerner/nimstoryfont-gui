import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ButtonType } from 'src/app/atoms/_models/button';
import { animateElement } from '../_functions/animate';


@Component({
  selector: 'app-confirmation-toggle-button',
  templateUrl: './confirmation-toggle-button.component.html',
  styleUrls: ['./confirmation-toggle-button.component.scss']
})
export class ConfirmationToggleButtonComponent {
  @Input() confirmationQuestion!: string;
  @Input() toggleType: ButtonType = 'DANGER';
  @Input() cancelButtonType: ButtonType = 'SECONDARY';
  
  @Output() confirm: EventEmitter<null> = new EventEmitter();
  
  @ViewChild("toggleElement") toggleElement!: ElementRef;

  isActive: boolean = false;
  
  toggle(){
    this.isActive = !this.isActive;
    animateElement( this.toggleElement.nativeElement , 'flipInY');
  }
  
  emitConfirmation(){
    if(!this.isActive){
      return;
    }
    
    this.confirm.emit();
    this.toggle();
  }
}
