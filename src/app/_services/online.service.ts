import { isPlatformServer } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { fromEvent, map, merge, of, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnlineService {
  private isInServer = isPlatformServer(inject(PLATFORM_ID));

  public online$ = this.isInServer
    ? of(true)
    : merge(
        fromEvent(window, 'online').pipe(map(() => true)),
        fromEvent(window, 'offline').pipe(map(() => false)),
      ).pipe(startWith(window.navigator.onLine));
}
