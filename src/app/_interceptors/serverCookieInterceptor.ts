import { isPlatformServer } from '@angular/common';
import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, PLATFORM_ID, REQUEST_CONTEXT } from '@angular/core';
import { EMPTY, filter, Observable, tap } from 'rxjs';
import { SSRRequestContext } from '../_models/ssr-request-context';

export function addTokenInServerInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const isInServer = isPlatformServer(inject(PLATFORM_ID));
  console.log('addTokenInServerInterceptor: ', isInServer, req.url);
  if (!isInServer) return next(req);

  let cookies: any[];
  const context = inject<SSRRequestContext>(REQUEST_CONTEXT);
  try {
    cookies = context?.cookies ?? [];
  } catch (error) {
    cookies = [];
    console.log('ERROR: ', error);
  }
  cookies.forEach((cookie) => {
    req.headers.append(cookie.name, cookie.value);
  });

  try {
    return next(req).pipe(
      filter((event) => event.type === HttpEventType.Response),
      tap({
        next: (resp) => console.log('Response for ', req.url, ' : ', resp),
        error: (err) => console.log('Error for ', req.url, ' : ', err),
        complete: () => console.log('Complete for ', req.url),
        finalize: () => console.log('Finalize for ', req.url),
      }),
    );
  } catch (error) {
    console.log('ERROR2: ', error);
    return EMPTY;
  }
}
