import { createAction, props } from "@ngrx/store";
import { Campaign, CampaignOverview } from "../_models/campaign";
import { Login } from "../_models/login";
import { ExtendedMap } from "../_models/map";
import { OverviewItem } from "../_models/overview";
import { UserData } from "../_models/token";

export const loadCampaignSet = createAction('[App] Load Campaignset');
export const loadCampaignSetSuccess = createAction('[App] Load Campaignset Success', props<{ campaigns: CampaignOverview[] }>());
export const loadCampaignSetFailure = createAction('[App] Load Campaignset Failure', props<{ error: any }>());

export const setCurrentCampaign = createAction('[App] Set Current Campaign', props<{ campaignName: string }>());
export const clearCurrentCampaign = createAction('[App] Clear Current Campaign');

export const resetPassword = createAction('[Campaign] Reset Password', props<{ username: string }>());
export const resetPasswordSuccess = createAction('[Campaign] Reset Password Success');
export const resetPasswordFailure = createAction('[Campaign] Reset Password Failure', props<{ error: any }>());

export const login = createAction('[Campaign] Login', props<Login>());
export const loginSuccess = createAction('[Campaign] Login Success', props<UserData>());
export const loginFailure = createAction('[Campaign] Login Failure', props<{ error: any }>());

export const logout = createAction('[Campaign] Logout');
export const logoutSuccess = createAction('[Campaign] Logout Success');

export const loadMapOverviewItems = createAction('[App] Load Map Overview Items', props<{ campaignName: string }>());
export const loadMapOverviewItemsSuccess = createAction('[App] Load Map Overview Items Success', props<{ mapOverviewItems: OverviewItem[] }>());
export const loadMapOverviewItemsFailure = createAction('[App] Load Map Overview Items Failure', props<{ error: any }>());

export const loadMap = createAction('[App] Load Map', props<{ mapName: string, campaignName: string }>());
export const loadMapSuccess = createAction('[App] Load Map Success', props<{ map: ExtendedMap }>());
export const loadMapFailure = createAction('[App] Load Map Failure', props<{ error: any }>());

export const deleteMap = createAction('[App] Delete Map', props<{ map: ExtendedMap }>());
export const deleteMapSuccess = createAction('[App] Delete Map Success');
export const deleteMapFailure = createAction('[App] Delete Map Failure', props<{ error: any }>());

export const loadCampaign = createAction('[App] Load Campaign', props<{campaignName: string }>());
export const loadCampaignSuccess = createAction('[App] Load Campaign Success', props<{ campaign: Campaign }>());
export const loadCampaignFailure = createAction('[App] Load Campaign Failure', props<{ error: any }>());

export const loadRecentlyUpdatedArticles = createAction('[App] Load Recently Updated Articles', props<{ campaignName: string, pageCount: number }>());
export const loadRecentlyUpdatedArticlesSuccess = createAction('[App] Load Recently Updated Articles Success', props<{ recentlyUpdatedArticles: OverviewItem[] }>());
export const loadRecentlyUpdatedArticlesFailure = createAction('[App] Load Recently Updated Articles Failure', props<{ error: any }>());

export const searchArticles = createAction('[App] Search Campaign', props<{ campaignName: string, search: string}>());