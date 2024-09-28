import { computed, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ActivationEnd, Router } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { filter, map, Observable } from 'rxjs';
import { withDevtools } from 'src/utils/signalStoreFeatures/devtools/withDevtools';
import { withArticle } from 'src/utils/signalStoreFeatures/requestFeatures/withArticle';
import { withPageableQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withPageableQuery';
import { withQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withQuery';
import { Campaign, CampaignOverview } from '../_models/campaign';
import { OverviewItem } from '../_models/overview';
import { RecentlyUpdatedService } from '../_services/article/recently-updated.service';
import { CampaignService } from '../_services/utils/campaign.service';

type RecentlyUpdatedArticlesQueryArgs = { campaignName: string };

type CoreSubState = { currentCampaignName: string | undefined };

const initialCoreSubState: CoreSubState = { currentCampaignName: undefined };

export const CoreStore = signalStore(
  { providedIn: 'root' },
  withDevtools(),
  withState<CoreSubState>(initialCoreSubState),
  withArticle<Campaign, 'campaign'>('campaign', CampaignService),
  withPageableQuery<
    OverviewItem,
    RecentlyUpdatedArticlesQueryArgs,
    'recentlyUpdatedArticles'
  >('recentlyUpdatedArticles', (args, pageIndex) => {
    const service = inject(RecentlyUpdatedService);
    return service.getRecentlyUpdatedArticle(args.campaignName, pageIndex);
  }),
  withQuery<CampaignOverview[], void, 'campaigns'>('campaigns', () => {
    const service = inject(CampaignService);
    return service.campaignOverview();
  }),
  withComputed((store) => {
    const campaigns = store.campaignsData;
    const curentCampaignName = store.currentCampaignName;

    return {
      currentCampaign: computed(() => {
        return campaigns()?.find(
          (campaign) => campaign.name === store.currentCampaignName(),
        );
      }),
    };
  }),
  withMethods((store) => {
    return {
      clearCurrentCampaign: () =>
        patchState(store, { currentCampaignName: undefined }),
    };
  }),
  withHooks({
    onInit(store) {
      trackCampaignPathParam(store);
    },
  }),
);

function trackCampaignPathParam(store: any) {
  const campaignNameParam$ = inject(Router).events.pipe(
    filter((event) => event instanceof ActivationEnd),
    map((event) => event.snapshot.paramMap.get('campaign') ?? undefined),
    filter((name) => name != null),
  );

  campaignNameParam$.subscribe({
    next: (name) => {
      console.log('Update ActivationEnd');
      patchState(store, { currentCampaignName: name });
    },
  });
}

export function getCurrentCampaignName$(): Observable<string> {
  const campaignName$ = toObservable(inject(CoreStore).currentCampaignName);
  return campaignName$.pipe(filter((name) => name != null));
}
