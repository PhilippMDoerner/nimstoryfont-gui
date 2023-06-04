import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CampaignOverview } from '../_models/campaign';
import { ExtendedMap } from "../_models/map";
import { OverviewItem } from "../_models/overview";
import { clearCurrentCampaign, loadCampaignSetSuccess, setCurrentCampaign } from '../base.actions';
import { loadMapFailure, loadMapOverviewItemsSuccess, loadMapSuccess } from "./campaign.actions";

export const CAMPAIGN_STORE = 'campaign';

export interface State{
  campaignSet: CampaignOverview[];
  currentCampaign?: CampaignOverview;
  mapOverviewItems: OverviewItem[];
  map?: ExtendedMap;
  recentlyUpdatedArticles: OverviewItem[];
}

const initialState: State = {
  campaignSet: [],
  currentCampaign: undefined,
  mapOverviewItems: [],
  map: undefined,
  recentlyUpdatedArticles: [],
}

const reducer = createReducer(
  initialState,
  on(loadCampaignSetSuccess, (state, { campaigns }): State => ({
    ...state,
    campaignSet: [...campaigns],
  })),
  on(setCurrentCampaign, (state, { campaignName }): State => ({
    ...state,
    currentCampaign: state.campaignSet.find(campaign => campaign.name === campaignName),
  })),
  on(clearCurrentCampaign, (state): State => ({
    ...state,
    currentCampaign: undefined,
  })),
  on(loadMapOverviewItemsSuccess, (state, { mapOverviewItems }): State => ({
    ...state,
    mapOverviewItems: [...mapOverviewItems],
  })),
  on(loadMapSuccess, (state, { map }): State => ({
    ...state,
    map: { ...map },
  })),
  on(loadMapFailure, (state, { error }): State => ({
    ...state,
    map: undefined,
  }))
)

export const campaignReducer = (state: State, action: Action) => reducer(state, action);

// SELECTORS
export const selectCampaignState = createFeatureSelector<State>(CAMPAIGN_STORE);
export const selectMapOverviewItems = createSelector(
  selectCampaignState,
  (state: State): OverviewItem[] => state.mapOverviewItems
);
export const selectMap = createSelector(
  selectCampaignState,
  (state: State): ExtendedMap | undefined => state.map
);
export const selectCampaigns = createSelector(
  selectCampaignState,
  (state: State) => state.campaignSet
);
export const selectCurrentCampaign = createSelector(
  selectCampaignState,
  (state: State): CampaignOverview | undefined => state.currentCampaign
);
export const selectCurrentCampaignName = createSelector(
  selectCurrentCampaign,
  (campaign: CampaignOverview | undefined) => campaign?.name,
)
export const selectRecentlyUpdatedArticles = createSelector(
  selectCampaignState,
  (state: State): OverviewItem[] => state.recentlyUpdatedArticles,
);