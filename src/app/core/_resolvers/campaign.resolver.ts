import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { take } from 'rxjs';
import { CampaignService } from 'src/app/_services/utils/campaign.service';

export const campaignSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const campaignService = inject(CampaignService);

  campaignService.campaignList.data.pipe(take(1)).subscribe((list) => {
    const hasAlreaddyLoaded = list != null;
    if (hasAlreaddyLoaded) return;
    campaignService.loadCampaignOverview();
  });
};

export const campaignDetailSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  inject(CampaignService).loadList();
};
