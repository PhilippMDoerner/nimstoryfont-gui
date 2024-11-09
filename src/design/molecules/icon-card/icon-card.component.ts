import { DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Icon } from 'src/design/atoms/_models/icon';
import { IconComponent } from 'src/design/atoms/icon/icon.component';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconComponent, DatePipe, TitleCasePipe],
})
export class IconCardComponent {
  icon = input.required<Icon>();
  title = input.required<string>();
  subText = input.required<string>();
  updateDatetime = input.required<string>();
}
