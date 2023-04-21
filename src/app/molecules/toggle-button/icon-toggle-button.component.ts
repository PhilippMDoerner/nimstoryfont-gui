import { Component, Input } from '@angular/core';
import { ElementType } from 'src/app/atoms/_models/button';
import { Icon } from 'src/app/atoms/_models/icon';

type ButtonState = 'TOGGLED' | 'UNTOGGLED';

@Component({
  selector: 'app-icon-toggle-button',
  templateUrl: './icon-toggle-button.component.html',
  styleUrls: ['./icon-toggle-button.component.scss']
})
export class IconToggleButtonComponent {
  @Input() toggledStateIcon!: Icon;
  @Input() untoggledStateIcon!: Icon;
  @Input() buttonType: ElementType = 'SECONDARY';
  
  state: ButtonState = 'UNTOGGLED';
  
  toggle(){
    const isToggled = this.state === 'TOGGLED';
    this.state = isToggled ? 'UNTOGGLED' : 'TOGGLED';
  }
}
