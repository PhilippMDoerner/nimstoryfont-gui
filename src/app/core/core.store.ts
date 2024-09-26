import { inject } from '@angular/core';
import { signalStore, withState } from '@ngrx/signals';
import { withArticle } from 'src/utils/signalStoreFeatures/requestFeatures/withArticle';
import { withPageableQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withPageableQuery';
import { Campaign } from '../_models/campaign';
import { OverviewItem } from '../_models/overview';
import { RecentlyUpdatedService } from '../_services/article/recently-updated.service';
import { CampaignService } from '../_services/utils/campaign.service';

type CoreState = {};

const initialState: CoreState = {};

type RecentlyUpdatedArticlesQueryArgs = { campaignName: string };

export const CoreStore = signalStore(
  withState<CoreState>(initialState),
  withArticle<Campaign, string>('campaign', CampaignService),
  withPageableQuery<OverviewItem, RecentlyUpdatedArticlesQueryArgs, string>(
    'recentlyUpdatedArticles',
    (args, pageIndex) => {
      const service = inject(RecentlyUpdatedService);
      return service.getRecentlyUpdatedArticle(args.campaignName, pageIndex);
    },
  ),
);
