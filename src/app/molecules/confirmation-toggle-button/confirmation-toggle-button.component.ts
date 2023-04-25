import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import { Icon } from 'src/app/atoms';
import { ElementType } from 'src/app/atoms/_models/button';


@Component({
  selector: 'app-confirmation-toggle-button',
  templateUrl: './confirmation-toggle-button.component.html',
  styleUrls: ['./confirmation-toggle-button.component.scss']
})
export class ConfirmationToggleButtonComponent {
  @Input() confirmationQuestion!: string;
  @Input() icon?: Icon;
  @Input() text?: string;
  @Input() toggleType: ElementType = 'DANGER';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  
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
