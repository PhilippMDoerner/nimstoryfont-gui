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
})
export class IconComponent {
  icon = input.required<Icon>();
  iconType = computed<IconType>(() => {
    const isSolidIcon = ALL_SOLID_ICONS.includes(this.icon());
    return isSolidIcon ? 'SOLID' : 'REGULAR';
  });
}
