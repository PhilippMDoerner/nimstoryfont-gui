import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { WikiStatistics } from "src/app/_models/campaign";
import { AdminService } from "src/app/_services/utils/admin.service";
import { loadSiteStatistics, loadSiteStatisticsFailure, loadSiteStatisticsSuccess } from "../app.actions";

@Injectable()
export class StatisticEffects {

  loadSiteStatistics$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadSiteStatistics),
    switchMap((): Observable<Action> => {
      return this.adminService.getStatistics().pipe(
        switchMap((statistics: WikiStatistics) => of(loadSiteStatisticsSuccess({statistics}))),
        catchError(error => of(loadSiteStatisticsFailure(error)))
      );
    }),
  )); 
  
  constructor(
    private actions$: Actions,
    private adminService: AdminService,
  ) {}
}