import { inject } from '@angular/core';
import { signalStore, withMethods } from '@ngrx/signals';
import { withArticle } from 'src/utils/signalStoreFeatures/requestFeatures/withArticle';
import { withPageableQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withPageableQuery';
import { withQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withQuery';
import { CampaignOverview } from '../_models/campaign';
import { OverviewItem } from '../_models/overview';
import { RecentlyUpdatedService } from '../_services/article/recently-updated.service';
import { CampaignService } from '../_services/utils/campaign.service';
import { TokenService } from '../_services/utils/token.service';

type RecentlyUpdatedArticlesQueryArgs = { campaignName: string };

export const CoreStore = signalStore(
  { providedIn: 'root' },
  withArticle('campaign', CampaignService),
  withPageableQuery<OverviewItem, RecentlyUpdatedArticlesQueryArgs, string>(
    'recentlyUpdatedArticles',
    (args, pageIndex) => {
      const service = inject(RecentlyUpdatedService);
      return service.getRecentlyUpdatedArticle(args.campaignName, pageIndex);
    },
  ),
  withQuery<CampaignOverview[], void, 'campaigns'>('campaigns', () => {
    const service = inject(CampaignService);
    return service.campaignOverview();
  }),
  withMethods((store) => ({
    logout: () => {
      const service = inject(TokenService);
      service.invalidateJWTToken();
      service.removeJWTTokenFromLocalStorage();
    },
    getCurrentUserName: () => {
      const service = inject(TokenService);
      return service.getCurrentUserName();
    },
    isGlobalAdmin: () => {
      const service = inject(TokenService);
      return service.isAdmin() || service.isSuperUser();
    },
  })),
);
