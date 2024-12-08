import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ReplaySubject, Subject } from 'rxjs';
import { map, skip, take } from 'rxjs/operators';
import { debugLog } from 'src/utils/rxjs-operators';
import { CampaignService } from '../utils/campaign.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalUrlParamsService {
  public campaignSetTrigger$ = new Subject<void>();

  private currentRouteSnapshot$ =
    new ReplaySubject<ActivatedRouteSnapshot | null>(1);

  public campaignNameParam$ = this.currentRouteSnapshot$.pipe(
    map((snapshot) => snapshot?.params['campaign'] as string | undefined),
    debugLog('campaignName'),
  );

  constructor(
    private campaignService: CampaignService,
    private urlLocation: Location,
  ) {
    this.currentRouteSnapshot$.subscribe();
  }

  /**
   * @description Refreshes the current campaign set aka updates it with data from the server.
   * If this succeeds, also try to reach the last location again that was attempted to be reached
   * before an error was thrown and the campaign set was removed due to not having an internet connection.
   */
  public async refreshAndReturnToLastURL(): Promise<void> {
    this.campaignService
      .campaignOverview()
      .pipe(skip(1), take(1))
      .subscribe(() => this.urlLocation.back());
  }

  nextSnapshot(snapshot: ActivatedRouteSnapshot | null): void {
    this.currentRouteSnapshot$.next(snapshot);
  }
}
