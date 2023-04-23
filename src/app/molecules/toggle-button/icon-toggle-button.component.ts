import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementType } from 'src/app/atoms/_models/button';
import { Icon } from 'src/app/atoms/_models/icon';
import { ToggleState } from '../_models/toggle';
@Component({
  selector: 'app-icon-toggle-button',
  templateUrl: './icon-toggle-button.component.html',
  styleUrls: ['./icon-toggle-button.component.scss']
})
export class IconToggleButtonComponent {
  @Input() toggledStateIcon!: Icon;
  @Input() untoggledStateIcon!: Icon;
  @Input() buttonType: ElementType = 'SECONDARY';
  
  @Output() toggle: EventEmitter<ToggleState> = new EventEmitter();
  
  state: ToggleState = 'UNTOGGLED';
  
  onClick(){
    const isToggled = this.state === 'TOGGLED';
    this.state = isToggled ? 'UNTOGGLED' : 'TOGGLED';
    this.toggle.emit(this.state);
  }
}
