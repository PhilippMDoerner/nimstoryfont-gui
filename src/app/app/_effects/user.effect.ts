import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { User } from "src/app/_models/user";
import { UserService } from "src/app/_services/article/user.service";
import { TokenService } from "src/app/_services/utils/token.service";
import { loadCurrentUser, loadCurrentUserFailure, loadCurrentUserSuccess } from "../app.actions";

@Injectable()
export class UserEffects {

  loadCurrent$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(loadCurrentUser),
    switchMap((): Observable<Action> => {
      const userId = this.tokenService.getCurrentUserPk();
      return this.userService.read(userId).pipe(
        switchMap((user: User) => of(loadCurrentUserSuccess(user))),
        catchError(error => of(loadCurrentUserFailure(error)))
      );
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private tokenService: TokenService,
  ) {}
}