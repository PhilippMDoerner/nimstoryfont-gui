import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
})
export class BadgeComponent {
  @Input() type!: ElementType;
  @Input() text!: string;
  clickable = input(false);
  @Input() icon?: Icon;

  @Output() badgeClick = new EventEmitter<void>();
}
