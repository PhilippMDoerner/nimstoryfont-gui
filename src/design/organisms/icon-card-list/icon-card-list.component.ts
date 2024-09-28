import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconCardEntry } from '../_model/icon-card-list';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCardListComponent {
  @Input() articles!: IconCardEntry[];
}
