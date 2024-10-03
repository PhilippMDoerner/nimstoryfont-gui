import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRouteSnapshot } from '@angular/router';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';
import { CampaignOverview } from 'src/app/_models/campaign';
import { CampaignService } from '../utils/campaign.service';
import { TitleService } from './title.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalUrlParamsService {
  public currentCampaignSet$ = this.campaignService.campaignOverview.data;
  private currentRouteSnapshot$ =
    new ReplaySubject<ActivatedRouteSnapshot | null>(1);

  public campaignNameParam$ = this.currentRouteSnapshot$.pipe(
    map((snapshot) => snapshot?.params['campaign'] as string | undefined),
    tap((x) => console.log('Current campaign name', x)),
  );
  public isLoadingCampaignSet$ =
    this.campaignService.campaignOverview.isLoading;
  public currentCampaign = this.trackCurrentCampaign(
    this.currentCampaignSet$,
    this.campaignNameParam$,
  );

  constructor(
    private campaignService: CampaignService,
    private urlLocation: Location,
    private myTitleService: TitleService,
  ) {
    this.currentRouteSnapshot$.subscribe();
    this.syncPageTitleWithRouteData();
  }

  private syncPageTitleWithRouteData() {
    this.currentRouteSnapshot$
      .pipe(takeUntilDestroyed())
      .subscribe((snapshot) => {
        const routeParams = snapshot?.params;
        const routeName = snapshot?.data['name'];
        if (routeParams != null && routeName != null) {
          this.myTitleService.updatePageTitle(routeParams, routeName);
        }
      });
  }

  private trackCurrentCampaign(
    campaignSet$: Observable<CampaignOverview[] | undefined>,
    campaignName$: Observable<string | undefined>,
  ): Observable<CampaignOverview | undefined> {
    return combineLatest({
      campaigns: campaignSet$,
      name: campaignName$,
    }).pipe(
      map(({ campaigns, name }) => {
        if (name == null) return undefined;

        return campaigns?.find(
          (campaign) => campaign.name.toLowerCase() === name.toLowerCase(),
        );
      }),
    );
  }

  /**
   * @description Refreshes the current campaign set aka updates it with data from the server.
   * If this succeeds, also try to reach the last location again that was attempted to be reached
   * before an error was thrown and the campaign set was removed due to not having an internet connection.
   */
  public async refreshAndReturnToLastURL(): Promise<void> {
    this.campaignService.loadCampaignOverview();
    this.currentCampaignSet$
      .pipe(skip(1), take(1))
      .subscribe(() => this.urlLocation.back());
  }

  nextSnapshot(snapshot: ActivatedRouteSnapshot | null): void {
    this.currentRouteSnapshot$.next(snapshot);
  }
}
