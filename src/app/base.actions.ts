import { createAction, props } from "@ngrx/store";
import { CampaignOverview } from "./_models/campaign";

export const loadCampaignSet = createAction('[Base] Load Campaignset');
export const loadCampaignSetSuccess = createAction('[Base] Load Campaignset Success', props<{ campaigns: CampaignOverview[] }>());
export const loadCampaignSetFailure = createAction('[Base] Load Campaignset Failure', props<{ error: any }>());

export const setCurrentCampaign = createAction('[Base] Set Current Campaign', props<{ campaignName: string }>());
export const clearCurrentCampaign = createAction('[Base] Clear Current Campaign');