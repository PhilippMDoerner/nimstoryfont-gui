import { Component } from '@angular/core';
import { take } from 'rxjs';
import { RecentlyUpdatedService } from 'src/app/_services/article/recently-updated.service';
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
  ) {}

  search(searchVal: string): void {
    // this.campaignData$;
    // const payload = { campaignName, search: searchVal };
    // this.store.dispatch(searchArticles(payload)); // TODO: Implement firing article search
  }

  loadArticlePage(): void {
    this.currentCampaignName$.pipe(take(1)).subscribe((campaignName) => {
      this.recentlyUpdatedService.loadRecentlyUpdatedArticlesNextPage(
        campaignName,
      );
    });
  }
}
