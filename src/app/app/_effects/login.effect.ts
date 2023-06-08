import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { Login } from "src/app/_models/login";
import { UserData } from "src/app/_models/token";
import { TokenService } from "src/app/_services/utils/token.service";
import { login, loginFailure, loginSuccess, logout, logoutSuccess } from "../app.actions";

@Injectable()
export class LoginEffects {  
  login$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(login),
    switchMap((loginData: Login): Observable<Action> => {
      return this.tokenService.login(loginData).pipe(
        switchMap((userData: UserData) => {
          this.tokenService.setUserData(userData);
          return of(loginSuccess(userData));
        }),
        catchError(error => of(loginFailure(error))),
      );
    }),
  ));
  
  logout$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(logout),
    switchMap((): Observable<Action> => {
      this.tokenService.invalidateJWTToken();
      this.tokenService.removeJWTTokenFromLocalStorage();
      return of(logoutSuccess());
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private tokenService: TokenService,
  ) {}

}