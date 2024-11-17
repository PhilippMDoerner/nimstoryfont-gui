import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Icon, IconKind, toIconKind } from '../_models/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  standalone: true,
})
export class IconComponent {
  icon = input.required<Icon>();

  iconType = computed<IconKind>(() => toIconKind(this.icon()));
}
