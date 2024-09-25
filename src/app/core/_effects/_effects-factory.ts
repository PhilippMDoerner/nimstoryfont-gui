import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Action, ActionCreator } from '@ngrx/store/src/models';
import { Observable, catchError, filter, of, switchMap } from 'rxjs';
import { selectCurrentCampaignName } from '../app.reducer';

/**
 * The actions controlling an Effect doing an asynchronous task (e.g. HTTP effects)
 * startAction: The action starting the service call
 * endAction: The action dispatched once the service call finishes
 * failureAction: The action dispatched if the service call fails
 *
 * Used as base type for other Effect Types.
 */
interface AsyncEffectActions<T> {
  startAction: ActionCreator;
  endAction: ActionCreator<
    string,
    (props: { data: T }) => { data: T } & any
  >;
  failureAction: ActionCreator<
    string,
    (props: {
      error: HttpErrorResponse;
    }) => { error: HttpErrorResponse } & any
  >;
}

export interface BasicEffectData<T> extends AsyncEffectActions<T> {
  serviceCall: () => Observable<T>;
}

export interface CampaignEffectData<T> extends AsyncEffectActions<T> {
  serviceCall: (campaignName: string) => Observable<T>;
}

export interface CampaignAndNameEffectData<T> extends AsyncEffectActions<T> {
  startAction: ActionCreator<
    string,
    (props: { name: string }) => { name: string } & any
  >;
  serviceCall: (campaignName: string, params: string) => Observable<T>;
}

export interface CampaignAndPkEffectData<T> extends AsyncEffectActions<T> {
  startAction: ActionCreator<
    string,
    (props: { pk: number }) => { pk: number } & any
  >;
  serviceCall: (campaignName: string, params: number) => Observable<T>;
}

export const createBasicEffect = (
  effect: BasicEffectData<any>
): Observable<Action> => {
  const actions$ = inject(Actions);

  return createEffect(
    (): Observable<Action> =>
      actions$.pipe(
        ofType(effect.startAction),
        switchMap((): Observable<Action> => {
          return effect.serviceCall().pipe(
            switchMap((data: any) => of(effect.endAction({ data }))),
            catchError((error) => of(effect.failureAction({ error })))
          );
        })
      )
  );
};

export const createCampaignEffect = (
  effect: CampaignEffectData<any>
): Observable<Action> => {
  const actions$ = inject(Actions);
  const store = inject(Store);

  return createEffect(
    (): Observable<Action> =>
      actions$.pipe(
        ofType(effect.startAction),
        switchMap((): Observable<Action> => {
          return store.select(selectCurrentCampaignName).pipe(
            filter((campaignName) => !!campaignName),
            switchMap((campaignName: string | undefined) => {
              return effect.serviceCall(campaignName as string).pipe(
                switchMap((data: any) => of(effect.endAction({ data }))),
                catchError((error) => of(effect.failureAction({ error })))
              );
            })
          );
        })
      )
  );
};

export const createCampaignAndNameEffect = (
  effect: CampaignAndNameEffectData<any>
): Observable<Action> => {
  const actions$ = inject(Actions);
  const store = inject(Store);

  return createEffect(
    (): Observable<Action> =>
      actions$.pipe(
        ofType(effect.startAction),
        switchMap(({ name }): Observable<Action> => {
          return store.select(selectCurrentCampaignName).pipe(
            filter((campaignName) => !!campaignName),
            switchMap((campaignName: string | undefined) => {
              return effect.serviceCall(campaignName as string, name).pipe(
                switchMap((data: any) => of(effect.endAction({ data }))),
                catchError((error) => of(effect.failureAction({ error })))
              );
            })
          );
        })
      )
  );
};

export const createCampaignAndPkEffect = (
  effect: CampaignAndPkEffectData<any>
): Observable<Action> => {
  const actions$ = inject(Actions);
  const store = inject(Store);

  return createEffect(
    (): Observable<Action> =>
      actions$.pipe(
        ofType(effect.startAction),
        switchMap(({ pk }): Observable<Action> => {
          return store.select(selectCurrentCampaignName).pipe(
            filter((campaignName) => !!campaignName),
            switchMap((campaignName: string | undefined) => {
              return effect.serviceCall(campaignName as string, pk).pipe(
                switchMap((data: any) => of(effect.endAction({ data }))),
                catchError((error) => of(effect.failureAction({ error })))
              );
            })
          );
        })
      )
  );
};
