import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first } from 'rxjs';
import { CampaignOverview } from 'src/app/_models/campaign';
import { OverviewItem } from 'src/app/_models/overview';
import { environment } from 'src/environments/environment';
import { loadRecentlyUpdatedArticles, searchArticles } from '../campaign.actions';
import { selectCurrentCampaign, selectRecentlyUpdatedArticles } from '../campaign.reducer';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{
  serverUrl = environment.apiUrl;
  campaignData$!: Observable<CampaignOverview | undefined>;
  recentlyUpdatedArticles$!: Observable<OverviewItem[]>;
  
  constructor(
    private store: Store,
  ){}
  
  ngOnInit(): void {
    this.campaignData$ = this.store.select(selectCurrentCampaign);
    this.recentlyUpdatedArticles$ = this.store.select(selectRecentlyUpdatedArticles);
  }
  
  search(searchVal: string): void{
    this.campaignData$
      .pipe(first())
      .subscribe(campaignData => {
        const campaignName = campaignData?.name as string;
        const payload = { campaignName, search: searchVal };
        this.store.dispatch(searchArticles(payload));
      });
  }
  
  loadArticlePage(pageCount: number): void{
    this.campaignData$
      .pipe(first())
      .subscribe(campaignData => {
        const campaignName = campaignData?.name as string;
        const payload = { campaignName, pageCount };
        this.store.dispatch(loadRecentlyUpdatedArticles(payload));
      });
  }
}
