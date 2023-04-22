import { Component, Input } from '@angular/core';
import { ElementType } from '../_models/button';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() type!: ElementType;
}
