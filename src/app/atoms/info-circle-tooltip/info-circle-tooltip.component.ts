import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-circle-tooltip',
  templateUrl: './info-circle-tooltip.component.html',
  styleUrls: ['./info-circle-tooltip.component.scss']
})
export class InfoCircleTooltipComponent {
  @Input() tooltip!: string;
  @Input() text!: string;
}
