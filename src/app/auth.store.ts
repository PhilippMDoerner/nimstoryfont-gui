import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, take, tap } from 'rxjs';
import { withQueries } from 'src/utils/store/withQueries';
import { Login } from './_models/login';
import { httpErrorToast } from './_models/toast';
import { TokenService } from './_services/utils/token.service';
import { ToastService } from './design/organisms/toast-overlay/toast-overlay.component';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withQueries(() => {
    const tokenService = inject(TokenService);
    return {
      authData: () => tokenService.fetchAuthData(),
    };
  }),
  withComputed((state) => {
    return {
      isLoggedIn: computed(() => {
        const isLoading =
          state.authDataQueryState() === 'init' ||
          state.authDataQueryState() === 'loading';
        if (isLoading) return undefined;

        const hasAuthData = state.authData() != null;
        return hasAuthData;
      }),
      isGlobalAdmin: computed(
        () => state.authData()?.isAdmin || state.authData()?.isSuperUser,
      ),
      currentUserName: computed(() => state.authData()?.userName),
      currentUserPk: computed(() => state.authData()?.userId),
    };
  }),
  withMethods((state) => {
    const tokenService = inject(TokenService);
    const toastService = inject(ToastService);

    return {
      getCampaignRole: (campaignName: string) => {
        const userData = state.authData();
        if (userData == null) return undefined;
        return tokenService.getCampaignRole(userData, campaignName);
      },
      login: rxMethod<Login>(
        pipe(
          tap(() =>
            patchState(state, {
              authData: undefined,
              authDataError: undefined,
              authDataQueryState: 'loading',
            }),
          ),
          switchMap((loginData) => tokenService.login(loginData)),
          tapResponse({
            next: (authData) =>
              patchState(state, { authData, authDataQueryState: 'success' }),
            error: (err: HttpErrorResponse) => {
              patchState(state, {
                authDataQueryState: undefined,
                authDataError: err,
              });
              httpErrorToast(err);
            },
          }),
        ),
      ),
      logout: () => {
        tokenService
          .logout()
          .pipe(
            tapResponse({
              next: () => {
                patchState(state, {
                  authData: undefined,
                });
              },
              error: (err: HttpErrorResponse) =>
                toastService.addToast(httpErrorToast(err)),
            }),
            take(1),
          )
          .subscribe();
      },
    };
  }),
);
