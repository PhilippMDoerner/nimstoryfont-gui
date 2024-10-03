import { computed, inject } from '@angular/core';
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
import { withCreateMutation } from 'src/utils/signalStoreFeatures/requestFeatures/withCreateMutation';
import { withDeleteMutation } from 'src/utils/signalStoreFeatures/requestFeatures/withDeleteMutation';
import { withPageableQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withPageableQuery';
import {
  getFeatureData,
  patchQueryFeatureStore,
  withQuery,
} from 'src/utils/signalStoreFeatures/requestFeatures/withQuery';
import { Entity } from 'src/utils/signalStoreFeatures/types';
import { Campaign, CampaignOverview } from '../_models/campaign';
import { MapMarkerType } from '../_models/mapMarkerType';
import { OverviewItem } from '../_models/overview';
import { PlayerClass } from '../_models/playerclass';
import { MarkerTypeService } from '../_services/article/marker-type.service';
import { PlayerClassService } from '../_services/article/player-class.service';
import { RecentlyUpdatedService } from '../_services/article/recently-updated.service';
import { CampaignService } from '../_services/utils/campaign.service';

type RecentlyUpdatedArticlesQueryArgs = { campaignName: string };

type CoreSubState = { currentCampaignName: string | undefined };

const initialCoreSubState: CoreSubState = { currentCampaignName: undefined };

type DeleteArgs = { entryId: number };
export type CoreStoreType = InstanceType<typeof CoreStore>;

export const CoreStore = signalStore(
  withMethods((store) => {
    return {
      _onCreateSucces: (kind: string) => {
        console.log('Called', kind);
      },
    };
  }),
  withDevtools('Core'),
  withState<CoreSubState>(initialCoreSubState),
  withQuery<MapMarkerType[], void, 'markerTypeTable'>('markerTypeTable', () =>
    inject(MarkerTypeService).loadList(),
  ),
  withQuery<PlayerClass[], void, 'playerClassTable'>('playerClassTable', () =>
    inject(PlayerClassService).loadList(),
  ),
  withMethods((store) => {
    // Extend deletion/creation behavior for MapMarkerType & PlayerClass
    return {
      onCreateMarkerTypeSuccess: (newEntry: MapMarkerType) => {
        addEntryToListQuery(store, 'markerTypeTable', newEntry);
      },
      onCreatePlayerClassSuccess: (newEntry: PlayerClass) => {
        addEntryToListQuery(store, 'playerClassTable', newEntry);
      },
      onDeleteMarkerTypeSuccess: ({ entryId }: DeleteArgs) => {
        removeDataFromListQuery(store, 'markerTypeTable', entryId);
      },
      onDeletePlayerClassSuccess: ({ entryId }: DeleteArgs) => {
        removeDataFromListQuery(store, 'playerClassTable', entryId);
      },
    };
  }),
  withArticle<Campaign, 'campaign'>('campaign', CampaignService),
  withPageableQuery<
    OverviewItem,
    RecentlyUpdatedArticlesQueryArgs,
    'recentlyUpdatedArticles'
  >('recentlyUpdatedArticles', (args, pageIndex) => {
    const service = inject(RecentlyUpdatedService);
    return service.loadRecentlyUpdatedArticles(args.campaignName, pageIndex);
  }),
  withQuery<CampaignOverview[], void, 'campaigns'>('campaigns', () => {
    const service = inject(CampaignService);
    return service.campaignOverview();
  }),
  withDeleteMutation<MapMarkerType, DeleteArgs, 'markerType'>(
    'markerType',
    ({ entryId }) => inject(MarkerTypeService).delete(entryId),
  ),
  withCreateMutation<MapMarkerType, Partial<MapMarkerType>, 'markerType'>(
    'markerType',
    (data) => inject(MarkerTypeService).doCreate(data),
  ),
  withDeleteMutation<PlayerClass, DeleteArgs, 'playerClass'>(
    'playerClass',
    ({ entryId }) => inject(PlayerClassService).delete(entryId),
  ),
  withCreateMutation<PlayerClass, Partial<PlayerClass>, 'playerClass'>(
    'playerClass',
    (data) => inject(PlayerClassService).doCreate(data),
  ),

  withComputed((store) => {
    const campaigns = store.campaignsData;

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
      getCampaignNameParam().subscribe({
        next: (name) => patchState(store, { currentCampaignName: name }),
      });
    },
  }),
);

export function getCampaignNameParam(): Observable<string> {
  return inject(Router).events.pipe(
    filter((event) => event instanceof ActivationEnd),
    map((event) => event.snapshot.paramMap.get('campaign') ?? undefined),
    filter((name) => name != null),
  );
}

function addEntryToListQuery<T, Prop extends string>(
  store: any,
  name: Prop,
  data: T,
) {
  const items = getFeatureData<T[], Prop>(store, name) ?? [];
  const updatedItems = [...items, data];
  patchQueryFeatureStore(store, name, updatedItems);
}

function removeDataFromListQuery<T extends Entity, Prop extends string>(
  store: any,
  name: Prop,
  removedEntryId: number,
) {
  const items = getFeatureData<T[], Prop>(store, name) ?? [];
  const updatedItems = items.filter((item) => {
    const itemId = item.id ?? item.pk; // Entity may have either pk or id field
    return itemId !== removedEntryId;
  });
  patchQueryFeatureStore(store, name, updatedItems);
}
