import { Component, Input, OnChanges } from '@angular/core';
import { ALL_SOLID_ICONS, Icon } from '../_models/icon';

type IconType = "SOLID" | "REGULAR";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges{
  @Input() icon!: Icon;
  iconType: IconType = "REGULAR";
  
  ngOnChanges(): void {
    const isSolidIcon = ALL_SOLID_ICONS.includes(this.icon);
    this.iconType = isSolidIcon ? 'SOLID' : 'REGULAR';
  }
}
