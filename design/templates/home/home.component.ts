import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { CampaignOverview } from 'src/app/_models/campaign';
import {
  ArticleKind,
  OverviewItem,
  VisitedState,
} from 'src/app/_models/overview';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

import { ContentScrollEvent, GlobalStore } from 'src/app/global.store';
import { Icon } from 'src/design/atoms/_models/icon';
import { PlaceholderComponent } from 'src/design/atoms/placeholder/placeholder.component';
import { IconCardEntry } from 'src/design/organisms/_model/icon-card-list';
import { HtmlTextComponent } from '../../atoms/html-text/html-text.component';
import { SearchFieldComponent } from '../../molecules/search-field/search-field.component';
import { IconCardListComponent } from '../../organisms/icon-card-list/icon-card-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    PageContainerComponent,
    HtmlTextComponent,
    SearchFieldComponent,
    IconCardListComponent,
    PlaceholderComponent,
  ],
})
export class HomeComponent {
  globalStore = inject(GlobalStore);
  PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD = 400;
  DEFAULT_ICON = '/assets/icons/icon-512x512.webp';
  ARTICLE_ICON_MAP: { [key: string]: Icon } = {
    location: 'compass',
    encounter: 'comments',
    creature: 'dragon',
    character: 'male',
    diaryentry: 'book-open',
    item: 'magic',
    map: 'map',
    organization: 'sitemap',
    quest: 'question-circle',
    sessionaudio: 'file-audio',
    rules: 'book',
    spell: 'hand-sparkles',
    session: 'calendar-alt',
  };

  serverUrl = input.required<string>();
  campaignData = input.required<CampaignOverview | undefined>();
  articles = input.required<OverviewItem[] | undefined>();
  isLoading = input.required<boolean>();
  canLoadMore = input.required<boolean>();

  @Output() appSearch: EventEmitter<string> = new EventEmitter();
  @Output() loadArticlePage: EventEmitter<number> = new EventEmitter();

  articleEntries = computed<IconCardEntry[]>(
    () =>
      this.articles()?.map((article) => this.toIconCardEntry(article)) ?? [],
  );
  pageNumber: number = 0;

  constructor() {
    effect(() => {
      const articles = this.articles();
      const isScrollDueToPageUnload =
        articles === undefined || articles.length === 0;
      if (isScrollDueToPageUnload) return;

      const scrollEvent = this.globalStore.contentScrollEvents();
      if (!scrollEvent) return;

      this.onPageScroll(scrollEvent);
    });
  }

  private toIconCardEntry(article: OverviewItem): IconCardEntry {
    return {
      entryType: article.article_type.toUpperCase() as ArticleKind,
      icon: this.ARTICLE_ICON_MAP[article.article_type],
      link: article.getAbsoluteRouterUrl(),
      title: article.name,
      subText: article.article_type.toLowerCase(),
      updateDatetime: article.update_datetime as string,
      decoration: this.toDecorationLabel(article.visited_state),
    };
  }

  private toDecorationLabel(
    visibilityState: VisitedState | undefined,
  ): string | undefined {
    switch (visibilityState) {
      case 'NEW_UPDATED':
        return 'Updated';
      case 'NEW_CREATED':
        return 'New';
      default:
        return undefined;
    }
  }

  private onPageScroll(event: ContentScrollEvent) {
    if (this.isNearPageEnd(event)) {
      this.triggerNextPageLoad();
    }
  }

  private triggerNextPageLoad(): void {
    const canLoadNextPage =
      !this.isLoading() && this.articles() != null && this.canLoadMore();
    if (!canLoadNextPage) {
      return;
    }

    this.pageNumber += 1;
    this.loadArticlePage.emit(this.pageNumber);
  }

  private isNearPageEnd(pageScrollEvent: ContentScrollEvent): boolean {
    const pageElement = pageScrollEvent.detail.pageElement.nativeElement;
    const totalPageHeight: number = pageElement.scrollHeight;
    const visiblePageHeight: number = pageElement.clientHeight;
    const maxScrollHeight: number = totalPageHeight - visiblePageHeight;

    const currentYPosition = pageElement.scrollTop;
    const pixelDistanceToPageBottom: number =
      maxScrollHeight - currentYPosition;

    return (
      pixelDistanceToPageBottom < this.PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD
    );
  }
}
