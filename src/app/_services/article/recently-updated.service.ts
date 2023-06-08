import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OverviewItem } from 'src/app/_models/overview';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root'
})
export class RecentlyUpdatedService {
  apiUrl: string = environment.apiUrl;
  
  recentlyUpdatedUrl: string = `${this.apiUrl}/recentupdates`
  searchUrl: string = `${this.apiUrl}/search`

  constructor(
    private routingService: RoutingService,
    private http: HttpClient
  ) { }

  getRecentlyUpdatedArticle(campaign: string, pageNumber: number): Observable<OverviewItem[]>{
    if(pageNumber == null) pageNumber = 0;
    console.log("Recently updated")
    return this.http.get<any[]>(`${this.recentlyUpdatedUrl}/${campaign}/${pageNumber}`)
      .pipe(
        map(entries => entries.map(entry => this.parseOverviewEntity(entry))),
      );
  }

  
  getGlobalSearchArticle(searchString: string): Observable<{articles: OverviewItem[], emptyResonse: string}>{
    const resultObservable = this.http.get<{articles: OverviewItem[], emptyResonse: string}>(`${this.searchUrl}/${searchString}`);
    const modifiedObservable = resultObservable.pipe(
      map(searchResponse => {
        const searchArticles: OverviewItem[] = searchResponse.articles;
        const searchArticleObjects: OverviewItem[] = searchArticles.map((item: OverviewItem) =>  this.parseOverviewEntity(item));
        searchResponse.articles = searchArticleObjects;
        return searchResponse;
      })
    );

    return modifiedObservable;
  }


  getCampaignSearchArticle(campaign: string, searchString: string): Observable<{articles: OverviewItem[], emptyResponse: string}>{
    const resultObservable = this.http.get<{articles: OverviewItem[], emptyResponse: string}>(`${this.searchUrl}/${campaign}/${searchString}`);
    return resultObservable.pipe(
      map(searchResponse => {
        const searchArticles: any[] = searchResponse.articles;
        const searchArticleObjects: OverviewItem[] = searchArticles.map((item: OverviewItem) =>  this.parseOverviewEntity(item));
        searchResponse.articles = searchArticleObjects;
        return searchResponse;
      })
    );
  }
  
  parseOverviewEntity(data: any): OverviewItem {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }
  
  private generateUrlCallback(data: any){
    const articleType = data.article_type;
    const campaignName = data.campaign_details.name;
    const params: any = { campaign: campaignName };
    let routeName: string = "";
    switch (articleType){
      case "character":
        params.name = data.name;
        routeName = "character";
        break;
      case "creature":
        params.name = data.name;
        routeName = "creature";
        break;
      case "diaryentry":
        params.session_number = data.session_details.session_number;
        params.isMainSession = data.session_details.is_main_session_int;
        params.authorName = data.author_details.name;
        routeName = "diaryentry";
        break;
      case "encounter":
        params.session_number = data.diaryentry_details.session_number;
        params.isMainSession = data.diaryentry_details.is_main_session_int;
        params.authorName = data.diaryentry_details.author_name;
        params.encounterTitle = data.title;
        routeName = "diaryentry-encounter";
        break;
      case "item":
        params.name = data.name;
        routeName = "item";
        break;
      case "location":
        params.name = data.name;
        params.parent_name = data.parent_location_details.name;
        routeName = "location";
        break;
      case "organization":
        params.name = data.name;
        routeName = "organization";
        break;
      case "quest":
        params.name = data.name;
        routeName = "quest";
        break;
      case "sessionaudio":
        params.isMainSession = data.session_details.is_main_session_int;
        params.sessionNumber = data.session_details.session_number;
        routeName = "sessionaudio";
        break;
      case "session":
        routeName = "sessions";
        break;
      case "map":
        params.name = data.name;
        routeName = "map";
        break;
      case "timestamp":
        routeName = "default-map";
        break;
      case "mapmarker":
        params.name = data.name;
        routeName = "map";
        break;
      case "spell":
        params.name = data.name;
        routeName = "spells";
        break;
      case "rules":
        params.name = data.name;
        routeName = "rules";
        break;
    }
    
    return () => this.routingService.getRoutePath(
      routeName,
      params
    );
  }
}
