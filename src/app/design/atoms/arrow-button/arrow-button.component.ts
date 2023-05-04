import { Component, Input } from '@angular/core';
import { ElementType } from '../_models/button';

@Component({
  selector: 'app-arrow-button',
  templateUrl: './arrow-button.component.html',
  styleUrls: ['./arrow-button.component.scss']
})
export class ArrowButtonComponent {
  @Input() icon!: 'up' | 'down';
  @Input() type: ElementType = 'SECONDARY';
  @Input() outline: boolean = false;
  @Input() disabled: boolean = false;
}
