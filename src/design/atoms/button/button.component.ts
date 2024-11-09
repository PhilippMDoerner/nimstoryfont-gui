import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ElementSize, ElementType } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconComponent, NgClass],
})
export class ButtonComponent {
  text = input<string>();
  icon = input<Icon>();
  type = input<ElementType>('PRIMARY');
  size = input<ElementSize>('MEDIUM');
  isSubmitButton = input<boolean>(false);
  disabled = input<boolean>(false);
  outline = input<boolean>(false);
  tabIndex = input<number>(-1);
}
