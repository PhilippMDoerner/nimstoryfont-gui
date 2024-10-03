import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { RecentlyUpdatedService } from 'src/app/_services/article/recently-updated.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';

export const recentlyUpdatedArticleResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const service = inject(RecentlyUpdatedService);
  inject(GlobalUrlParamsService)
    .campaignNameParam$.pipe(takeFirstNonNil())
    .subscribe((campaignName) => {
      service.loadRecentlyUpdatedArticlesFirstPage(campaignName);
    });
};
