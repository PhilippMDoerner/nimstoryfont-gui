import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { PermissionGroup } from "src/app/_models/auth";
import { GroupService } from "src/app/_services/article/group.service";
import { loadSiteUserGroups, loadSiteUserGroupsFailure, loadSiteUserGroupsSuccess } from "../app.actions";

@Injectable()
export class GroupEffects {

  loadGroups$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadSiteUserGroups),
    switchMap((): Observable<Action> => {
      return this.groupService.list().pipe(
        switchMap((groups: PermissionGroup[]) => of(loadSiteUserGroupsSuccess({ groups }))),
        catchError(error => of(loadSiteUserGroupsFailure(error)))
      );
    }),
  )); 
  
  constructor(
    private actions$: Actions,
    private groupService: GroupService,
  ) {}
}