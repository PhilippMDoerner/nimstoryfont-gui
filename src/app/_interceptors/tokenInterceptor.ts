import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, retry, skip, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';
import { TokenService } from '../_services/utils/token.service';

const MAX_RETRY_COUNT = 3;

export function addTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  if (!isApiUrlRequiringJWTToken(req.url)) return next(req);

  const tokenService = inject(TokenService);

  const accessToken = TokenService.getAccessToken();
  const hasAccessToken = accessToken != null;
  if (!hasAccessToken) {
    tokenService.refreshUserData();
  }

  return tokenService.userData.data$.pipe(
    map((data) => data?.accessToken.token),
    takeFirstNonNil(),
    map((token) => addTokenToRequest(token, req)),
    mergeMap((updatedRequest) => next(updatedRequest)),
    retry({
      count: MAX_RETRY_COUNT + 1,
      delay: (err: HttpErrorResponse, retryCount: number) => {
        switch (err.status) {
          case 401:
            tokenService.refreshUserData();
            const canSuccessfullyRefresh = retryCount <= MAX_RETRY_COUNT;
            if (!canSuccessfullyRefresh) {
              throw err;
            }

            const userDataAfterRefresh = tokenService.userData.data$.pipe(
              skip(1),
            );
            return userDataAfterRefresh;
          default:
            throw err;
        }
      },
    }),
    tap({
      error: (error) => {
        const isAuthError =
          error instanceof HttpErrorResponse && error.status === 401;
        if (isAuthError) {
          // TODO: Show toast that user is no longer logged in due to HTTP error
          tokenService.logout();
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

function addTokenToRequest(
  token: string,
  request: HttpRequest<any>,
): HttpRequest<any> {
  const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  request = request.clone({ headers: httpHeaders });
  return request;
}
