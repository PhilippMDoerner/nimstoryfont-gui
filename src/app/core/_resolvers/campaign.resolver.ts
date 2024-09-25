import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { clearCurrentCampaign, loadCampaign, loadCampaignDetailSet, loadCampaignSet, setCurrentCampaign } from '../app.actions';

export const campaignResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(loadCampaign({ campaignName }));
}

export const campaignSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadCampaignSet());
}

export const campaignDetailSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadCampaignDetailSet());
}
export const updateCurrentCampaignResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(setCurrentCampaign({ campaignName }));
}

export const clearCurrentCampaignResolver: ResolveFn<void> = () => inject(Store).dispatch(clearCurrentCampaign());