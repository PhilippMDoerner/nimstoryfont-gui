import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CampaignService } from 'src/app/_services/utils/campaign.service';

export const statisticsResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const campaignName = route.params['campaign'];
  inject(CampaignService).loadStatistics(campaignName);
};
