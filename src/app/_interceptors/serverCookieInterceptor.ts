import { isPlatformServer } from '@angular/common';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST_CONTEXT } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { SSRRequestContext } from '../_models/ssr-request-context';

export function addTokenInServerInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const isInServer = isPlatformServer(inject(PLATFORM_ID));
  console.log('addTokenInServerInterceptor: ', isInServer, req.url);
  if (!isInServer) return next(req);

  const { cookies } = inject<SSRRequestContext>(REQUEST_CONTEXT);
  cookies.forEach((cookie) => {
    req.headers.append(cookie.name, cookie.value);
  });

  return next(req).pipe(
    tap({
      next: (resp) => console.log('Response for ', req.url, ' : ', resp),
      error: (err) => console.log('Error for ', req.url, ' : ', err),
    }),
  );
}
