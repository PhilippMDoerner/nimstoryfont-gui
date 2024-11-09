import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ALL_SOLID_ICONS, Icon } from '../_models/icon';

type IconType = 'SOLID' | 'REGULAR';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
  standalone: true,
})
export class IconComponent {
  icon = input.required<Icon>();

  iconType = computed<IconType>(() => {
    const isSolidIcon = ALL_SOLID_ICONS.includes(this.icon() as any);
    return isSolidIcon ? 'SOLID' : 'REGULAR';
  });
}
