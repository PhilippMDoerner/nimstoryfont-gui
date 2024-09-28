import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  clearCurrentCampaign,
  loadCampaignDetailSet,
  setCurrentCampaign,
} from '../app.actions';
import { CoreStore } from '../core.store';

export const campaignSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const coreStore = inject(CoreStore);
  const hasAlreadyLoaded = coreStore.campaignsData() != null;
  if (hasAlreadyLoaded) return;

  coreStore.loadCampaigns();
};

export const campaignDetailSetResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  inject(Store).dispatch(loadCampaignDetailSet());
};
export const updateCurrentCampaignResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(setCurrentCampaign({ campaignName }));
};

export const clearCurrentCampaignResolver: ResolveFn<void> = () =>
  inject(Store).dispatch(clearCurrentCampaign());
