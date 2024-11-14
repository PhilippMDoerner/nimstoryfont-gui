import { ElementRef, Injectable } from '@angular/core';
import { filter, fromEvent, map, shareReplay, withLatestFrom } from 'rxjs';
import { MOBILE_WIDTH } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class SwipeService {
  constructor() {}

  getSwipeEvents(elementRef: ElementRef<HTMLElement>) {
    const touchStart$ = fromEvent<TouchEvent>(
      elementRef.nativeElement,
      'touchstart',
    ).pipe(
      filter(() => this.isMobile()),
      shareReplay(1),
    );
    const touchEnd$ = fromEvent<TouchEvent>(
      elementRef.nativeElement,
      'touchend',
    ).pipe(filter(() => this.isMobile()));

    const swipe$ = touchEnd$.pipe(
      withLatestFrom(touchStart$),
      map(([touchEnd, touchStart]) => {
        const swipeStartX = touchStart.touches[0]?.clientX;
        const swipeEndX = touchEnd.changedTouches[0]?.clientX;
        return swipeEndX - swipeStartX;
      }),
    );
    return swipe$;
  }

  private isMobile() {
    return screen.width <= MOBILE_WIDTH;
  }
}
