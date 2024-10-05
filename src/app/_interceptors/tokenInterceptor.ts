import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import {
  filter,
  first,
  map,
  mergeMap,
  retry,
  skip,
  take,
} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { filterNil, throwUnless } from 'src/utils/rxjs-operators';
import { RoutingService } from '../_services/routing.service';
import { RefreshTokenService } from '../_services/utils/refresh-token.service';
import { TokenService } from '../_services/utils/token.service';

const MAX_RETRY_COUNT = 3;

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

  return tokenService.userData.data.pipe(
    filterNil(),
    map((data) => data?.accessToken.token),
    first(),
    throwUnless(
      (token) => token != null,
      () => new Error('No token available'),
    ),
    map((token) => addTokenToRequest(token as string, req)),
    mergeMap((updatedRequest) => next(updatedRequest)),
    retry({
      count: 4,
      delay: (err: HttpErrorResponse, retryCount) => {
        tokenService.refreshUserData();
        const canSuccessfullyLogin = retryCount <= MAX_RETRY_COUNT;
        if (!canSuccessfullyLogin) {
          // TODO: Show toast that user is no longer logged in
          routingService.routeToPath('login');
          return tokenService.userData.data.pipe(skip(1), take(1));
        }

        const userDataAfterRefresh = combineLatest({
          data: tokenService.userData.data,
          isLoading: tokenService.userData.isLoading,
        }).pipe(
          filter(({ isLoading, data }) => !isLoading && data != null),
          take(1),
          map(({ data }) => data),
        );

        return userDataAfterRefresh;
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
