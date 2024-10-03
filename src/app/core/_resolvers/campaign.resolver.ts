import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A resolver that loads the campaign overview list. This list is used to populate
 * the campaign selection dropdown in the sidebar.
 *
 * @returns An observable that completes when the overview list is loaded.
 */
/******  c096364d-b340-4489-936c-7b0aa7322ad8  *******/ export const campaignSetResolver: ResolveFn<
  void
> = () => {
  inject(CampaignService).loadCampaignOverview();
};

export const campaignDetailSetResolver: ResolveFn<void> = () => {
  inject(CampaignService).loadList();
};

export const campaignResolver: ResolveFn<void> = () => {
  const campaignService = inject(CampaignService);
  inject(GlobalUrlParamsService)
    .campaignNameParam$.pipe(takeFirstNonNil())
    .subscribe((name) => campaignService.loadReadByParam(name));
};

export const trackCampaignName: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
) => {
  inject(GlobalUrlParamsService).nextSnapshot(route);
};
