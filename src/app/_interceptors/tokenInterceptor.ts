import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RoutingService } from '../_services/routing.service';
import { RefreshTokenService } from '../_services/utils/refresh-token.service';
import { TokenService } from '../_services/utils/token.service';

export function addTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  if (!isApiUrlRequiringJWTToken(req.url)) return next(req);

  const tokenService = inject(TokenService);
  const refreshService = inject(RefreshTokenService);
  const routingService = inject(RoutingService);

  const accessToken = TokenService.getAccessToken();
  const hasAccessToken = accessToken != null;
  if (!hasAccessToken) {
    refreshService.refreshUserData();
  }

  const modifiedRequest$ = combineLatest({
    userData: refreshService.userData.data,
    isRefreshInProgress: refreshService.isTokenRefreshInProgress$,
    refreshError: refreshService.userData.error,
  }).pipe(
    map(({ userData, isRefreshInProgress, refreshError }) => {
      const error = refreshError as { status: number };
      const hadErrorDuringRefresh = refreshError != null;
      if (hadErrorDuringRefresh) {
        if (error.status === 401) {
          console.log('Error while waiting for access token refresh\n', error);
          routingService.routeToPath('login-state', { state: '???' });
          return undefined;
        }

        console.log(
          'Error during token refresh. Uncertain what error, but status ',
          error.status,
          '\n',
          error,
        );
        routingService.routeToErrorPage(error.status);
      }

      const isLoggedIn = userData != null;
      if (!isLoggedIn) {
        routingService.routeToPath('login-state', { state: 'no-token' });
        return undefined;
      }

      const accessToken = userData.accessToken;
      if (tokenService.isTokenExpired(accessToken) && !isRefreshInProgress) {
        if (!isRefreshInProgress) {
          refreshService.refreshUserData();
        }
        return undefined;
      }

      return addTokenToRequest(accessToken.token, req);
    }),
  );

  return modifiedRequest$.pipe(
    filter((req) => req !== undefined),
    switchMap((req) => next(req)),
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
