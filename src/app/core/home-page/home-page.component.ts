import { Component, inject } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoreStore, getCurrentCampaignName$ } from '../core.store';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  serverUrl = environment.backendDomain;
  readonly coreStore = inject(CoreStore);
  campaignData = this.coreStore.currentCampaign;
  currentCampaignName$!: Observable<string>;
  recentlyUpdatedArticles = this.coreStore.recentlyUpdatedArticlesItems;
  hasMoreArticles = this.coreStore.canLoadMoreRecentlyUpdatedArticlesPages;

  constructor() {
    this.currentCampaignName$ = getCurrentCampaignName$();

    this.currentCampaignName$.pipe(take(1)).subscribe((campaignName) => {
      this.coreStore.loadFirstRecentlyUpdatedArticlesPage({ campaignName });
    });

    this.coreStore.loadCampaigns();
  }

  search(searchVal: string): void {
    // this.campaignData$;
    // const payload = { campaignName, search: searchVal };
    // this.store.dispatch(searchArticles(payload)); // TODO: Implement firing article search
  }

  loadArticlePage(): void {
    this.currentCampaignName$.pipe(take(1)).subscribe((campaignName) => {
      this.coreStore.loadNextRecentlyUpdatedArticlesPage({ campaignName });
    });
  }
}
