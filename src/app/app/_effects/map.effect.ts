import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { ExtendedMap } from "src/app/_models/map";
import { MapService } from "src/app/_services/article/map.service";
import { loadMap, loadMapFailure, loadMapSuccess } from "../app.actions";

@Injectable()
export class MapEffects {

  load: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadMap),
    switchMap(({campaignName, mapName}): Observable<Action> => {
      return this.mapService.readByParam(campaignName, { name: mapName }).pipe(
        switchMap((map: ExtendedMap) => of(loadMapSuccess({ map }))),
        catchError(error => of(loadMapFailure(error)))
      );
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private mapService: MapService,
  ) {}
}