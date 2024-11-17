import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, retry, take, tap } from 'rxjs/operators';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { environment } from 'src/environments/environment';
import { log } from 'src/utils/logging';
import { ToastConfig } from '../_models/toast';
import { GlobalStore } from '../global.store';

const logoutInfoToast: ToastConfig = {
  type: 'INFO',
  dismissMs: 3000,
  header: {
    text: 'Session expired',
  },
  body: {
    text: 'You have been logged out',
  },
  onToastClick: (dismiss) => dismiss(),
};

export function addTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const globalStore = inject(GlobalStore);
  const toastService = inject(ToastService);

  if (!isApiUrlRequiringJWTToken(req.url)) {
    return next(req);
  }

  return toObservable(globalStore.userData).pipe(
    take(1),
    map((data) => data?.accessToken.token),
    filter(Boolean),
    map((token) => addTokenToRequest(token, req)),
    mergeMap(next),
    retry({
      count: 3,
      delay: (err: HttpErrorResponse) => {
        log(retry.name, err);
        switch (err.status) {
          case 401:
            return globalStore.refreshUserData();
          default:
            throw err;
        }
      },
    }),
    tap({
      error: (err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          toastService.addToast(logoutInfoToast);
          globalStore.logout();
        }
      },
    }),
  );
}

const isApiUrlRequiringJWTToken = (url: string) =>
  isApiUrl(url) && isUrlRequiringJWTToken(url);

const isApiUrl = (url: string) => url.startsWith(environment.apiUrl);

const apiNonTokenURLEndings: string[] = [
  //Endings of API URLs that require no tokem to be used
  '/token', //Request new authentication token with refresh token
  '/token/refresh', //Request new refresh token with login data
  '/mail/reset', //Send password recovery mail
];
const isUrlRequiringJWTToken = (url: string) =>
  !apiNonTokenURLEndings.some((urlEnding) => url.endsWith(urlEnding));

function addTokenToRequest<T>(
  token: string,
  request: HttpRequest<T>,
): HttpRequest<T> {
  const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  request = request.clone({ headers: httpHeaders });
  return request;
}
