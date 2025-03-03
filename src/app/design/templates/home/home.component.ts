import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
} from '@angular/core';
import { CampaignOverview } from 'src/app/_models/campaign';
import {
  ArticleKind,
  OverviewItem,
  VisitedState,
} from 'src/app/_models/overview';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { HotkeyService } from 'src/app/_services/hotkey.service';
import { OnlineService } from 'src/app/_services/online.service';
import { Icon } from 'src/app/design/atoms/_models/icon';
import { PlaceholderComponent } from 'src/app/design/atoms/placeholder/placeholder.component';
import { IconCardEntry } from 'src/app/design/organisms/_model/icon-card-list';
import { ContentScrollEvent, GlobalStore } from 'src/app/global.store';
import { ButtonComponent } from '../../atoms/button/button.component';
import { HtmlTextComponent } from '../../atoms/html-text/html-text.component';
import { SearchFieldComponent } from '../../molecules/search-field/search-field.component';
import { IconCardListComponent } from '../../organisms/icon-card-list/icon-card-list.component';

const FILTER_MODES = ['NONE', '1WEEK', '1DAY'] as const;
type FilterMode = (typeof FILTER_MODES)[number];
const FILTER_LABEL: { [key in FilterMode]: string } = {
  NONE: 'All time',
  '1DAY': 'The last 24 hours',
  '1WEEK': 'The last 7 days',
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    PageContainerComponent,
    HtmlTextComponent,
    SearchFieldComponent,
    IconCardListComponent,
    PlaceholderComponent,
    AsyncPipe,
    NgOptimizedImage,
    ButtonComponent,
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
  hasMoreArticles = input.required<boolean>();

  isOnline$ = inject(OnlineService).online$;

  isHotkeyModifierPressed = toSignal(
    inject(HotkeyService).isHotkeyModifierPressed$ ?? of(false),
  );
  timeFilterOptions = FILTER_MODES.map((mode) => ({
    value: mode,
    label: FILTER_LABEL[mode],
  }));

  timeFilter = signal<FilterMode>('NONE');
  filterDate = computed<Date | undefined>(() => {
    const now = new Date().getTime();
    switch (this.timeFilter()) {
      case 'NONE':
        return undefined;
      case '1DAY':
        const oneDayMs = 1000 * 60 * 60 * 24;
        return new Date(now - oneDayMs);
      case '1WEEK':
        const oneWeekMs = 1000 * 60 * 60 * 24 * 7;
        return new Date(now - oneWeekMs);
    }
  });
  canLoadMore = computed(() => {
    if (!this.hasMoreArticles()) return false;
    if (this.isLoading()) return false;

    const articles = this.articles();
    if (articles === undefined || articles.length === 0) return false; // articles === undefined means its still loading the articles

    const filterDate = this.filterDate();
    const isShowingUnfilteredList = filterDate === undefined;
    if (isShowingUnfilteredList) return true;

    const lastArticle = articles[articles.length - 1];
    const hasMoreArticlesInFilter =
      lastArticle.update_datetime &&
      new Date(lastArticle.update_datetime) > filterDate;

    return hasMoreArticlesInFilter;
  });

  @Output() appSearch: EventEmitter<string> = new EventEmitter();
  @Output() loadArticlePage: EventEmitter<number> = new EventEmitter();

  articleEntries = computed<IconCardEntry[]>(() => {
    const filterDate = this.filterDate();
    const articles = this.articles() ?? [];
    if (!filterDate) return articles.map((art) => this.toIconCardEntry(art));

    const firstArticleOutOfTimeframeIndex = articles.findIndex(
      (article) =>
        article.update_datetime &&
        new Date(article.update_datetime) < filterDate,
    );
    return articles
      .slice(0, firstArticleOutOfTimeframeIndex)
      .map((art) => this.toIconCardEntry(art));
  });
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

  updateFilter(target: EventTarget | null) {
    if (!target) {
      this.timeFilter.set('NONE');
      return;
    }
    const newFilterMode = (target as HTMLSelectElement).value as FilterMode;
    this.timeFilter.set(newFilterMode);
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
    const canLoadNextPage = this.canLoadMore();
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
