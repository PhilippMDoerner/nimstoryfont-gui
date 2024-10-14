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
import { filter, map, mergeMap, retry, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { log } from 'src/utils/logging';
import { TokenService } from '../_services/utils/token.service';
import { GlobalStore } from '../global.store';

const MAX_RETRY_COUNT = 3;

export function addTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const globalStore = inject(GlobalStore);

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
  );
}

const createErrorCallback = (tokenService: TokenService) => {
  return (error: any) => {
    const isAuthError =
      error instanceof HttpErrorResponse && error.status === 401;
    if (isAuthError) {
      // TODO: Show toast that user is no longer logged in due to HTTP error
      tokenService.logout();
    }
  };
};

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

function addTokenToRequest(
  token: string,
  request: HttpRequest<any>,
): HttpRequest<any> {
  const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  request = request.clone({ headers: httpHeaders });
  return request;
}
