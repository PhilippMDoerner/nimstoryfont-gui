import { Component, Input } from '@angular/core';
import { ElementType } from '../_models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ElementType = "PRIMARY";
}
