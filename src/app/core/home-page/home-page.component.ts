import { Component } from '@angular/core';
import { take } from 'rxjs';
import { RecentlyUpdatedService } from 'src/app/_services/article/recently-updated.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { environment } from 'src/environments/environment';
import { filterNil } from 'src/utils/rxjs-operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  serverUrl = environment.backendDomain;
  campaignData$ = this.paramService.currentCampaign;
  currentCampaignName$ = this.paramService.campaignNameParam$.pipe(filterNil());
  recentlyUpdatedArticles$ =
    this.recentlyUpdatedService.recentlyUpdatedArticles.data;
  hasMoreArticles$ =
    this.recentlyUpdatedService.recentlyUpdatedArticles.canLoadMore;

  constructor(
    private paramService: GlobalUrlParamsService,
    private recentlyUpdatedService: RecentlyUpdatedService,
    private routingService: RoutingService,
  ) {}

  search(searchTerm: string): void {
    if (searchTerm == null || searchTerm === '') {
      return;
    }

    const cleanedSearch = this.cleanSearchTerm(searchTerm);

    this.currentCampaignName$.pipe(take(1)).subscribe((campaignName) => {
      this.routingService.routeToPath('campaignSearch', {
        campaign: campaignName,
        searchString: cleanedSearch,
      });
    });
  }

  loadArticlePage(): void {
    this.currentCampaignName$.pipe(take(1)).subscribe((campaignName) => {
      this.recentlyUpdatedService.loadRecentlyUpdatedArticlesNextPage(
        campaignName,
      );
    });
  }

  private cleanSearchTerm(searchString: string): string {
    const consecutiveWhitespacePattern = /\s\s+/g;
    const nonNormalCharacterPattern = /[^a-zA-Z0-9']/g;

    return searchString
      .replace(nonNormalCharacterPattern, ' ')
      .trim()
      .replace(consecutiveWhitespacePattern, ' '); //Removes scenarios with more than 1 consecutive whitespace;
  }
}
