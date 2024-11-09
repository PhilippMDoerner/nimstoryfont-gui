import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-info-circle-tooltip',
  templateUrl: './info-circle-tooltip.component.html',
  styleUrls: ['./info-circle-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconComponent, NgbTooltip],
})
export class InfoCircleTooltipComponent {
  tooltip = input.required<string>();
  text = input.required<string>();
}
