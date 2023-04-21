import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementType } from '../_models/button';
import { Icon } from '../_models/icon';

@Component({
  selector: 'app-interactive-badge',
  templateUrl: './interactive-badge.component.html',
  styleUrls: ['./interactive-badge.component.scss']
})
export class InteractiveBadgeComponent {
  @Input() type!: ElementType;
  @Input() text!: string;
  @Input() textLink?: string;
  @Input() icon?: Icon;
  
  @Output() iconClick: EventEmitter<null> = new EventEmitter();
  @Output() labelClick: EventEmitter<null> = new EventEmitter();
}
