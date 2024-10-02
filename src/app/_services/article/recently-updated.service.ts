import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { OverviewItem } from 'src/app/_models/overview';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class RecentlyUpdatedService {
  apiUrl: string = environment.apiUrl;

  recentlyUpdatedUrl: string = `${this.apiUrl}/recentupdates`;
  searchUrl: string = `${this.apiUrl}/search`;

  recentlyUpdatedArticles = createRequestSubjects<OverviewItem[]>();
  searchedArticles = createRequestSubjects<{
    articles: OverviewItem[];
    emptyResponse: string;
  }>();

  constructor(
    private routingService: RoutingService,
    private http: HttpClient,
  ) {}

  loadRecentlyUpdatedArticle(campaign: string, pageNumber: number = 0) {
    const entries$ = this.http
      .get<any[]>(`${this.recentlyUpdatedUrl}/${campaign}/${pageNumber}`)
      .pipe(
        map((entries) =>
          entries.map((entry) => this.parseOverviewEntity(entry)),
        ),
      );

    trackQuery(entries$, this.recentlyUpdatedArticles);
  }

  getCampaignSearchArticle(campaign: string, searchString: string) {
    const resultObservable = this.http.get<{
      articles: OverviewItem[];
      emptyResponse: string;
    }>(`${this.searchUrl}/${campaign}/${searchString}`);
    const entries$ = resultObservable.pipe(
      map((searchResponse) => {
        const searchArticles: any[] = searchResponse.articles;
        const searchArticleObjects: OverviewItem[] = searchArticles.map(
          (item: OverviewItem) => this.parseOverviewEntity(item),
        );
        searchResponse.articles = searchArticleObjects;
        return searchResponse;
      }),
    );
    trackQuery(entries$, this.searchedArticles);
  }

  parseOverviewEntity(data: any): OverviewItem {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  private generateUrlCallback(data: any) {
    const articleType = data.article_type;
    const campaignName = data.campaign_details.name;
    const params: any = { campaign: campaignName };
    let routeName: string = '';
    switch (articleType) {
      case 'character':
        params.name = data.name;
        routeName = 'character';
        break;
      case 'creature':
        params.name = data.name;
        routeName = 'creature';
        break;
      case 'diaryentry':
        params.session_number = data.session_details.session_number;
        params.isMainSession = data.session_details.is_main_session_int;
        params.authorName = data.author_details.name;
        routeName = 'diaryentry';
        break;
      case 'encounter':
        params.session_number = data.diaryentry_details.session_number;
        params.isMainSession = data.diaryentry_details.is_main_session_int;
        params.authorName = data.diaryentry_details.author_name;
        params.encounterTitle = data.title;
        routeName = 'diaryentry-encounter';
        break;
      case 'item':
        params.name = data.name;
        routeName = 'item';
        break;
      case 'location':
        params.name = data.name;
        params.parent_name = data.parent_location_details.name;
        routeName = 'location';
        break;
      case 'organization':
        params.name = data.name;
        routeName = 'organization';
        break;
      case 'quest':
        params.name = data.name;
        routeName = 'quest';
        break;
      case 'sessionaudio':
        params.isMainSession = data.session_details.is_main_session_int;
        params.sessionNumber = data.session_details.session_number;
        routeName = 'sessionaudio';
        break;
      case 'session':
        routeName = 'sessions';
        break;
      case 'map':
        params.name = data.name;
        routeName = 'map';
        break;
      case 'timestamp':
        routeName = 'default-map';
        break;
      case 'mapmarker':
        params.name = data.name;
        routeName = 'map';
        break;
      case 'spell':
        params.name = data.name;
        routeName = 'spells';
        break;
      case 'rules':
        params.name = data.name;
        routeName = 'rules';
        break;
    }

    return () => this.routingService.getRoutePath(routeName, params);
  }
}
