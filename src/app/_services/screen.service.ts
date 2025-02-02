import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { debounceTime, EMPTY, fromEvent, map, startWith } from 'rxjs';
import { MOBILE_WIDTH } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private document = inject(DOCUMENT);
  public windowSize$ = this.document.defaultView
    ? fromEvent<Event>(this.document.defaultView, 'resize', {
        passive: true,
      }).pipe(
        debounceTime(500),
        map(() => this.document.defaultView?.innerWidth),
        startWith(this.document.defaultView?.innerWidth),
      )
    : EMPTY;

  public isMobile() {
    const windowWidth = this.document.defaultView?.innerWidth;
    return windowWidth ? windowWidth <= MOBILE_WIDTH : false;
  }

  public isMobile$ = this.windowSize$.pipe(
    map((width) => width && width <= MOBILE_WIDTH),
  );
}
