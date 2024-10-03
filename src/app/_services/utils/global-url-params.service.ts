import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Params,
  Router,
} from '@angular/router';
import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, map, skip, startWith, take } from 'rxjs/operators';
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
  );
  public isLoadingCampaignSet$ =
    this.campaignService.campaignOverview.isLoading;
  public currentCampaign = this.trackCurrentCampaign(
    this.currentCampaignSet$,
    this.campaignNameParam$,
  );

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    private urlLocation: Location,
    private myTitleService: TitleService,
  ) {
    this.currentRouteSnapshot$.subscribe();
    this.syncPageTitleWithRouteData();
  }

  private syncPageTitleWithRouteData() {
    this.currentRouteSnapshot$
      .pipe(
        takeUntilDestroyed(),
        filter((x) => x != null),
      )
      .subscribe((snapshot) => {
        const routeParams: Params = snapshot?.params;
        const routeName: string = snapshot?.data['name'];
        this.myTitleService.updatePageTitle(routeParams, routeName);
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

  /**
   * @description Starts the mechanism that whenever the route is changed, the currently selected campaign is automatically updated
   * Aka when there is a route that does not have the "campaign" parameter defined, camaignName will be null and the currently
   * selected campaign will be updated to be null.
   */
  private trackCurrentRoute(): Observable<ActivatedRouteSnapshot | null> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      startWith(null),
      map(() => this.router.routerState.snapshot.root),
    );
  }
  nextSnapshot(snapshot: ActivatedRouteSnapshot): void {
    this.currentRouteSnapshot$.next(snapshot);
  }
}
