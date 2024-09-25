import { Component, Input } from '@angular/core';
import { ElementSize, ElementType } from '../_models/button';
import { Icon } from '../_models/icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() icon?: Icon;
  @Input() type: ElementType = "PRIMARY";
  @Input() size: ElementSize = "MEDIUM";
  @Input() isSubmitButton: boolean = false;
  @Input() disabled: boolean = false;
  @Input() outline: boolean = false;
}
