import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadRecentlyUpdatedArticles } from '../app.actions';

export const recentlyUpdatedArticleResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(loadRecentlyUpdatedArticles({ pageCount: 0, campaignName }));
}
