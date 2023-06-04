import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCampaignSet, setCurrentCampaign } from './base.actions';

export const campaignSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadCampaignSet());
}

export const updateCurrentCampaignResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(setCurrentCampaign({ campaignName }));
}
