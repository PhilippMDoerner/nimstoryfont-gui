import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { OverviewItem } from "src/app/_models/overview";
import { RecentlyUpdatedService } from "src/app/_services/article/recently-updated.service";
import { loadRecentlyUpdatedArticles, loadRecentlyUpdatedArticlesFailure, loadRecentlyUpdatedArticlesSuccess } from "../app.actions";

@Injectable()
export class LoadRecentlyUpdatedArticlesEffects {  
  loadRecentlyUpdatedArticles$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadRecentlyUpdatedArticles),
    switchMap(({ campaignName, pageCount }): Observable<Action> => {
      return this.recentlyUpdated.getRecentlyUpdatedArticle(campaignName, pageCount).pipe(
        switchMap((articles: OverviewItem[]) => of(loadRecentlyUpdatedArticlesSuccess({ recentlyUpdatedArticles: articles }))),
        catchError(error => of(loadRecentlyUpdatedArticlesFailure(error))),
      );
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private recentlyUpdated: RecentlyUpdatedService,
  ) {}
}