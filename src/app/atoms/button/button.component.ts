import { Component, Input } from '@angular/core';
import { ElementSize, ElementType } from '../_models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ElementType = "PRIMARY";
  @Input() size: ElementSize = "MEDIUM";
}
