import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, of, switchMap } from "rxjs";
import { MailService } from "src/app/_services/utils/mail.service";
import { resetPassword, resetPasswordFailure, resetPasswordSuccess } from "../app.actions";

@Injectable()
export class ResetPasswordEffects {  
  resetPassword$: Observable<Action> = createEffect((): Observable<Action> => this.actions$.pipe(
    ofType(resetPassword),
    switchMap(({ username }): Observable<Action> => {
      return this.mailService.requestPasswordReset(username).pipe(
        switchMap(() => of(resetPasswordSuccess())),
        catchError(error => of(resetPasswordFailure(error))),
      );
    }),
  ));
  
  constructor(
    private actions$: Actions,
    private mailService: MailService,
  ) {}
}