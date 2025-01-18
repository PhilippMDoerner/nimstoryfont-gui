import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconCardComponent } from 'src/app/design/molecules';
import { PlaceholderComponent } from '../../atoms/placeholder/placeholder.component';
import { IconCardEntry } from '../_model/icon-card-list';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconCardComponent, RouterLink, PlaceholderComponent],
})
export class IconCardListComponent {
  isLoading = input.required<boolean>();
  articles = input.required<IconCardEntry[]>();

  dummyArticles = Array.from({ length: 12 }, (_, idx) => idx);
}
