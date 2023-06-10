import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from "@ngrx/store";
import { Campaign, CampaignOverview } from "../_models/campaign";
import { Login } from "../_models/login";
import { ExtendedMap } from "../_models/map";
import { OverviewItem } from "../_models/overview";
import { UserData } from "../_models/token";
import { User } from "../_models/user";
import { ConfigTableKind } from "../design/templates/_models/config-table";

export const loadCampaignSet = createAction('[App] Load Campaignset');
export const loadCampaignSetSuccess = createAction('[App] Load Campaignset Success', props<{ campaigns: CampaignOverview[] }>());
export const loadCampaignSetFailure = createAction('[App] Load Campaignset Failure', props<{ error: HttpErrorResponse }>());

export const setCurrentCampaign = createAction('[App] Set Current Campaign', props<{ campaignName: string }>());
export const clearCurrentCampaign = createAction('[App] Clear Current Campaign');

export const resetPassword = createAction('[Campaign] Reset Password', props<{ username: string }>());
export const resetPasswordSuccess = createAction('[Campaign] Reset Password Success');
export const resetPasswordFailure = createAction('[Campaign] Reset Password Failure', props<{ error: HttpErrorResponse }>());

export const login = createAction('[Campaign] Login', props<Login>());
export const loginSuccess = createAction('[Campaign] Login Success', props<UserData>());
export const loginFailure = createAction('[Campaign] Login Failure', props<{ error: HttpErrorResponse }>());

export const logout = createAction('[Campaign] Logout');
export const logoutSuccess = createAction('[Campaign] Logout Success');

export const loadMapOverviewItems = createAction('[App] Load Map Overview Items', props<{ campaignName: string }>());
export const loadMapOverviewItemsSuccess = createAction('[App] Load Map Overview Items Success', props<{ mapOverviewItems: OverviewItem[] }>());
export const loadMapOverviewItemsFailure = createAction('[App] Load Map Overview Items Failure', props<{ error: HttpErrorResponse }>());

export const loadMap = createAction('[App] Load Map', props<{ mapName: string, campaignName: string }>());
export const loadMapSuccess = createAction('[App] Load Map Success', props<{ map: ExtendedMap }>());
export const loadMapFailure = createAction('[App] Load Map Failure', props<{ error: HttpErrorResponse }>());

export const deleteMap = createAction('[App] Delete Map', props<{ map: ExtendedMap }>());
export const deleteMapSuccess = createAction('[App] Delete Map Success');
export const deleteMapFailure = createAction('[App] Delete Map Failure', props<{ error: HttpErrorResponse }>());

export const loadCampaign = createAction('[App] Load Campaign', props<{campaignName: string }>());
export const loadCampaignSuccess = createAction('[App] Load Campaign Success', props<{ campaign: Campaign }>());
export const loadCampaignFailure = createAction('[App] Load Campaign Failure', props<{ error: HttpErrorResponse }>());

export const loadRecentlyUpdatedArticles = createAction('[App] Load Recently Updated Articles', props<{ campaignName: string, pageCount: number }>());
export const loadRecentlyUpdatedArticlesSuccess = createAction('[App] Load Recently Updated Articles Success', props<{ recentlyUpdatedArticles: OverviewItem[] }>());
export const loadRecentlyUpdatedArticlesFailure = createAction('[App] Load Recently Updated Articles Failure', props<{ error: HttpErrorResponse }>());

export const searchArticles = createAction('[App] Search Campaign', props<{ campaignName: string, search: string}>());
export const resetRecentlyUpdatedArticleLoadState = createAction('[App] Reset Recently Updated Article Load State');

export const loadConfigTableEntries = createAction('[App] Load Config Table Entries', props<{ table: ConfigTableKind }>());
export const loadConfigTableEntriesSuccess = createAction('[App] Load Config Table Entries Success', props<{ table: ConfigTableKind, entries: unknown[] }>());
export const loadConfigTableEntriesFailure = createAction('[App] Load Config Table Entries Failure', props<{ table: ConfigTableKind, error: HttpErrorResponse }>());

export const createConfigTableEntry = createAction('[App] Create Config Table Entry', props<{ table: ConfigTableKind, entry: unknown}>());
export const createConfigTableEntrySuccess = createAction('[App] Create Config Table Entry Success', props<{ table: ConfigTableKind, entry: unknown }>());
export const createConfigTableEntryFailure = createAction('[App] Create Config Table Entry Failure', props<{ table: ConfigTableKind, error: HttpErrorResponse }>());

export const deleteConfigTableEntry = createAction('[App] Delete Config Table Entry', props<{ table: ConfigTableKind, entryId: number}>());
export const deleteConfigTableEntrySuccess = createAction('[App] Delete Config Table Entry Success', props<{ table: ConfigTableKind, entryId: number}>());
export const deleteConfigTableEntryFailure = createAction('[App] Delete Config Table Entry Failure', props<{ table: ConfigTableKind, error: HttpErrorResponse }>());

export const loadCurrentUser = createAction('[App] Load Current User');
export const loadCurrentUserSuccess = createAction('[App] Load Current User Success', props<User>());
export const loadCurrentUserFailure = createAction('[App] Load Current User Failure', props<{ error: HttpErrorResponse }>());
