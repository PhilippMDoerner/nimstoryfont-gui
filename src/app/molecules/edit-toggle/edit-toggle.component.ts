import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementType } from 'src/app/atoms/_models/button';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss']
})
export class EditToggleComponent {
  @Input() buttonType: ElementType = 'SECONDARY';
  @Input() toggled: boolean = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
  
  onClick(){
    this.toggled = !this.toggled;
    this.toggle.emit(this.toggled);
  }
}
