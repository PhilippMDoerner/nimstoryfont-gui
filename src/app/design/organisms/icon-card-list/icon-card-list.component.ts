import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  signal,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconCardComponent } from 'src/app/design/molecules';
import { componentId } from 'src/utils/DOM';
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

  articleLinkElements = viewChildren<ElementRef<HTMLElement>>('articleLink');
  articleCount = computed(() => this.articleLinkElements().length);

  dummyArticles = Array.from({ length: 12 }, (_, idx) => idx);
  focusedIndex = signal<number | undefined>(undefined);
  id = componentId();

  focusNextArticle(event: Event) {
    event.preventDefault();
    const currentIndex = this.focusedIndex() ?? -1;
    const articleElements = this.articleLinkElements();

    const nextIndex = (currentIndex + 1) % articleElements.length;
    this.focusArticle(nextIndex);
  }

  focusPriorArticle(event: Event) {
    event.preventDefault();
    const currentIndex = this.focusedIndex() ?? -1;
    const nextIndex =
      (currentIndex - 1 + this.articleCount()) % this.articleCount();
    this.focusArticle(nextIndex);
  }

  focusArticle(index: number) {
    const nextElement = this.articleLinkElements().at(index);
    nextElement?.nativeElement.focus();
  }
}
