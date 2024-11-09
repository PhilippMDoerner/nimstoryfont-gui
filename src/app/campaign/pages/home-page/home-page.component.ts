import { Component, computed, inject } from '@angular/core';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { HomePageStore } from './home-page.store';
import { HomeComponent } from '../../../../design/templates/home/home.component';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
    standalone: true,
    imports: [HomeComponent],
})
export class HomePageComponent {
  globalStore = inject(GlobalStore);
  homePageStore = inject(HomePageStore);

  serverUrl = environment.backendDomain;
  campaignData = this.globalStore.currentCampaign;
  currentCampaignName = computed(
    () => this.globalStore.currentCampaign()?.name,
  );
  recentlyUpdatedArticles = this.homePageStore.recentlyUpdatedArticles;
  hasMoreArticles = this.homePageStore.canLoadMore;

  constructor(private routingService: RoutingService) {
    this.homePageStore.loadMoreArticles(0);
  }

  search(searchTerm: string): void {
    if (searchTerm == null || searchTerm === '') {
      return;
    }

    const cleanedSearch = this.cleanSearchTerm(searchTerm);

    this.routingService.routeToPath('campaignSearch', {
      campaign: this.currentCampaignName(),
      searchString: cleanedSearch,
    });
  }

  loadArticlePage(pageNumber: number): void {
    this.homePageStore.loadMoreArticles(pageNumber);
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
