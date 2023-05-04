import { Component, Input } from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() type!: ElementType;
  @Input() text!: string;
  @Input() icon?: Icon;
}
