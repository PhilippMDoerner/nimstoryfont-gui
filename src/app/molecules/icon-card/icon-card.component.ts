import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/atoms';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {
  @Input() icon!: Icon;
  @Input() title!: string;
  @Input() subText!: string;
  @Input() updateDatetime!: string;
}
