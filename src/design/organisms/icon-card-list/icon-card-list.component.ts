import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconCardComponent } from 'src/design/molecules';
import { IconCardEntry } from '../_model/icon-card-list';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconCardComponent, RouterLink],
})
export class IconCardListComponent {
  articles = input.required<IconCardEntry[]>();
}
