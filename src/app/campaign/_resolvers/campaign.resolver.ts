import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCampaign } from '../campaign.actions';

export const campaignResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(loadCampaign({ campaignName }));
}
