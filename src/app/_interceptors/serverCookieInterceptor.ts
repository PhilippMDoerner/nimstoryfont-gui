import { isPlatformServer } from '@angular/common';
import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST_CONTEXT } from '@angular/core';
import { Observable } from 'rxjs';
import { SSRRequestContext } from '../_models/ssr-request-context';

export function addTokenInServerInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const isInServer = isPlatformServer(inject(PLATFORM_ID));
  console.log('addTokenInServerInterceptor: ', req.url);
  if (!isInServer) return next(req);

  const { cookie } = inject<SSRRequestContext>(REQUEST_CONTEXT);
  if (cookie.name && cookie.value) {
    req.headers.append(cookie.name, cookie.value);
  }

  return next(req);
}
