import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { ArticleKind, OverviewItem } from 'src/app/_models/overview';
import { Icon } from '../../atoms';
import { IconCardEntry } from '../../organisms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  DEFAULT_ICON = '/assets/icons/icon-512x512.webp';
  ARTICLE_ICON_MAP: {[key: string]: Icon} = {
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
  }
  
  
  @Input() serverUrl!: string;
  @Input() campaignData?: Campaign;
  @Input() articles!: OverviewItem[];
  
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Output() loadArticlePage: EventEmitter<number> = new EventEmitter();
  
  articleEntries!: IconCardEntry[];
  
  ngOnInit(): void {
    this.setArticleEntries();
  }
  
  ngOnChanges(): void {
    this.setArticleEntries();
  }
  
  private setArticleEntries(): void{
    this.articleEntries = this.articles.map(
      article => ({
        entryType: article.article_type.toUpperCase() as ArticleKind,
        icon: this.ARTICLE_ICON_MAP[article.article_type],
        link: article.getAbsoluteRouterUrl(),
        title: article.name,
        subText: article.article_type.toLowerCase(),
        updateDatetime: article.update_datetime as string,
      })
    );
  }
}
