import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { CampaignOverview } from 'src/app/_models/campaign';
import { ArticleKind, OverviewItem } from 'src/app/_models/overview';
import { ellipsize } from 'src/utils/string';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

import { Icon } from 'src/design/atoms/_models/icon';
import { IconCardEntry } from 'src/design/organisms/_model/icon-card-list';
import { HtmlTextComponent } from '../../atoms/html-text/html-text.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
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
    SpinnerComponent,
  ],
})
export class HomeComponent implements OnChanges {
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
    sessionaudio: 'file-audio-o',
    rule: 'book',
    spell: 'hand-sparkles',
    session: 'calendar-alt',
  };

  @Input() serverUrl!: string;
  @Input() campaignData?: CampaignOverview;
  @Input() articles?: OverviewItem[];
  @Input() canLoadMore: boolean = true;

  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() loadArticlePage: EventEmitter<number> = new EventEmitter();

  articleEntries: IconCardEntry[] = [];
  isLoading: boolean = false;
  pageNumber: number = 0;

  ngOnChanges(): void {
    this.isLoading = false;

    if (this.articles == null) {
      return;
    }
    this.articleEntries = this.articles.map((article) =>
      this.toIconCardEntry(article),
    );
  }

  private toIconCardEntry(article: OverviewItem): IconCardEntry {
    return {
      entryType: article.article_type.toUpperCase() as ArticleKind,
      icon: this.ARTICLE_ICON_MAP[article.article_type],
      link: '', //article.getAbsoluteRouterUrl(), //TODO: Enable links again when routes for these have been added
      title: ellipsize(article.name, 40),
      subText: article.article_type.toLowerCase(),
      updateDatetime: article.update_datetime as string,
    };
  }

  @HostListener('window:page.scroll', ['$event'])
  onPageScroll(event: CustomEvent) {
    if (this.isNearPageEnd(event)) {
      this.triggerNextPageLoad();
    }
  }

  private triggerNextPageLoad(): void {
    const canLoadNextPage =
      !this.isLoading && this.articles != null && this.canLoadMore;
    if (!canLoadNextPage) {
      return;
    }

    this.pageNumber += 1;
    this.isLoading = true;
    this.loadArticlePage.emit(this.pageNumber);
  }

  private isNearPageEnd(pageScrollEvent: CustomEvent): boolean {
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
