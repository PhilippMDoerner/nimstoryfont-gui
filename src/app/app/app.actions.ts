import { createAction, props } from "@ngrx/store";
import { Campaign, CampaignOverview } from "../_models/campaign";
import { ExtendedMap } from "../_models/map";
import { OverviewItem } from "../_models/overview";

export const loadMapOverviewItems = createAction('[Campaign] Load Map Overview Items', props<{ campaignName: string }>());
export const loadMapOverviewItemsSuccess = createAction('[Campaign] Load Map Overview Items Success', props<{ mapOverviewItems: OverviewItem[] }>());
export const loadMapOverviewItemsFailure = createAction('[Campaign] Load Map Overview Items Failure', props<{ error: any }>());

export const loadMap = createAction('[Campaign] Load Map', props<{ mapName: string, campaignName: string }>());
export const loadMapSuccess = createAction('[Campaign] Load Map Success', props<{ map: ExtendedMap }>());
export const loadMapFailure = createAction('[Campaign] Load Map Failure', props<{ error: any }>());

export const deleteMap = createAction('[Campaign] Delete Map', props<{ map: ExtendedMap }>());
export const deleteMapSuccess = createAction('[Campaign] Delete Map Success');
export const deleteMapFailure = createAction('[Campaign] Delete Map Failure', props<{ error: any }>());

export const loadCampaign = createAction('[Campaign] Load Campaign', props<{campaignName: string }>());
export const loadCampaignSuccess = createAction('[Campaign] Load Campaign Success', props<{ campaign: Campaign }>());
export const loadCampaignFailure = createAction('[Campaign] Load Campaign Failure', props<{ error: any }>());

export const loadRecentlyUpdatedArticles = createAction('[Campaign] Load Recently Updated Articles', props<{ campaignName: string, pageCount: number }>());
export const loadRecentlyUpdatedArticlesSuccess = createAction('[Campaign] Load Recently Updated Articles Success', props<{ recentlyUpdatedArticles: OverviewItem[] }>());
export const loadRecentlyUpdatedArticlesFailure = createAction('[Campaign] Load Recently Updated Articles Failure', props<{ error: any }>());

export const searchArticles = createAction('[Campaign] Search Campaign', props<{ campaignName: string, search: string}>());

export const loadCampaignSet = createAction('[Base] Load Campaignset');
export const loadCampaignSetSuccess = createAction('[Base] Load Campaignset Success', props<{ campaigns: CampaignOverview[] }>());
export const loadCampaignSetFailure = createAction('[Base] Load Campaignset Failure', props<{ error: any }>());

export const setCurrentCampaign = createAction('[Base] Set Current Campaign', props<{ campaignName: string }>());
export const clearCurrentCampaign = createAction('[Base] Clear Current Campaign');