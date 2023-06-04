import { Action, ActionReducer, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CampaignOverview } from './_models/campaign';
import { clearCurrentCampaign, loadCampaignSetSuccess, setCurrentCampaign } from "./base.actions";

export const BASE_STORE = 'base';

export interface BaseState{
  currentCampaign?: CampaignOverview;
  campaignSet: CampaignOverview[];
}

const initialState: BaseState = {
  currentCampaign: undefined,
  campaignSet: [],
}

const reducer: ActionReducer<BaseState, Action> = createReducer(
  initialState,
  on(loadCampaignSetSuccess, (state, { campaigns }): BaseState => ({
    ...state,
    campaignSet: [...campaigns],
  })),
  on(setCurrentCampaign, (state, { campaignName }): BaseState => {
    const fallback = state?.currentCampaign;
    const newCampaign = state.campaignSet.find(campaign => campaign.name === campaignName);
    return {
      ...state,
      currentCampaign: newCampaign ?? fallback,
    };
  }),
  on(clearCurrentCampaign, (state): BaseState => ({
    ...state,
    currentCampaign: undefined,
  })),
)

export const baseReducer = (state: BaseState | undefined, action: Action): BaseState => reducer(state, action);

// SELECTORS
export const selectCampaignState = createFeatureSelector<BaseState>(BASE_STORE);
export const selectCampaigns = createSelector(
  selectCampaignState,
  (state: BaseState) => state.campaignSet
);
export const selectCurrentCampaign = createSelector(
  selectCampaignState,
  (state: BaseState): CampaignOverview | undefined => state.currentCampaign
);
export const selectCurrentCampaignName = createSelector(
  selectCurrentCampaign,
  (campaign: CampaignOverview | undefined) => campaign?.name,
);