import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { Campaign, CampaignOverview } from "../../_models/campaign";
import { CampaignService } from "../../_services/utils/campaign.service";
import { loadCampaignDetailSet, loadCampaignDetailSetFailure, loadCampaignDetailSetSuccess, loadCampaignSet, loadCampaignSetFailure, loadCampaignSetSuccess } from "../app.actions";

@Injectable()
export class CampaignEffects {

  loadCampaignSet$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadCampaignSet),
    switchMap((): Observable<Action> => {
      return this.campaignService.campaignOverview().pipe(
        switchMap((campaigns: CampaignOverview[]) => of(loadCampaignSetSuccess({ campaigns }))),
        catchError(error => of(loadCampaignSetFailure(error)))
      );
    }),
  ));
  
  loadCampaignDetailSet$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadCampaignDetailSet),
    switchMap((): Observable<Action> => {
      return this.campaignService.list().pipe(
        switchMap((campaigns: Campaign[]) => of(loadCampaignDetailSetSuccess({ campaigns }))),
        catchError(error => of(loadCampaignDetailSetFailure(error))),
      );
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private campaignService: CampaignService,
  ) {}

}