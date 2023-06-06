import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CampaignOverview } from '../_models/campaign';
import { SpecialLoginState } from '../_models/login';
import { ExtendedMap } from "../_models/map";
import { OverviewItem } from "../_models/overview";
import { clearCurrentCampaign, loadCampaignSetSuccess, loadMapFailure, loadMapOverviewItemsSuccess, loadMapSuccess, setCurrentCampaign as setCurrentCampaignName } from './app.actions';

export const APP_STORE = 'app';

export interface AppState{
  campaignSet: CampaignOverview[];
  currentCampaignName?: string;
  mapOverviewItems: OverviewItem[];
  map?: ExtendedMap;
  recentlyUpdatedArticles: OverviewItem[];
  resetErrorMessage?: string;
  specialLoginState?: SpecialLoginState;
}

const initialState: AppState = {
  campaignSet: [],
  currentCampaignName: undefined,
  mapOverviewItems: [],
  map: undefined,
  recentlyUpdatedArticles: [],
}

const reducer = createReducer(
  initialState,
  on(loadCampaignSetSuccess, (state, { campaigns }): AppState => ({
    ...state,
    campaignSet: [...campaigns],
  })),
  on(setCurrentCampaignName, (state, { campaignName }): AppState => ({
    ...state,
    currentCampaignName: campaignName,
  })),
  on(clearCurrentCampaign, (state): AppState => ({
    ...state,
    currentCampaignName: undefined,
  })),
  on(loadMapOverviewItemsSuccess, (state, { mapOverviewItems }): AppState => ({
    ...state,
    mapOverviewItems: [...mapOverviewItems],
  })),
  on(loadMapSuccess, (state, { map }): AppState => ({
    ...state,
    map: { ...map },
  })),
  on(loadMapFailure, (state, { error }): AppState => ({
    ...state,
    map: undefined,
  }))
)

export const appReducer = (state: AppState | undefined, action: Action): AppState => reducer(state, action);

// SELECTORS
export const selectCampaignState = createFeatureSelector<AppState>(APP_STORE);
export const selectMapOverviewItems = createSelector(
  selectCampaignState,
  (state: AppState): OverviewItem[] => state?.mapOverviewItems as OverviewItem[]
);
export const selectMap = createSelector(
  selectCampaignState,
  (state: AppState): ExtendedMap => state?.map as ExtendedMap
);
export const selectCampaigns = createSelector(
  selectCampaignState,
  (state: AppState) => state?.campaignSet
);
export const selectCurrentCampaignName = createSelector(
  selectCampaignState,
  (state: AppState) => state?.currentCampaignName,
);
export const selectCurrentCampaign = createSelector(
  selectCampaignState,
  (state: AppState): CampaignOverview | undefined => {
    const campaignName = state.currentCampaignName;
    return state.campaignSet.find(campaign => campaign.name === campaignName);
  }
);
export const selectRecentlyUpdatedArticles = createSelector(
  selectCampaignState,
  (state: AppState): OverviewItem[] => state?.recentlyUpdatedArticles as OverviewItem[],
);
export const selectSpecialLoginState = createSelector(
  selectCampaignState,
  (state: AppState): SpecialLoginState | undefined => state?.specialLoginState
)
export const selectResetPasswordErrorMessage = createSelector(
  selectCampaignState,
  (state: AppState): string | undefined => state?.resetErrorMessage,
)