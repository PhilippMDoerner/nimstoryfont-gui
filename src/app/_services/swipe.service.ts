import { ElementRef, Injectable } from '@angular/core';
import { filter, fromEvent, map, shareReplay, tap, withLatestFrom } from 'rxjs';
import { MOBILE_WIDTH, SWIPE_Y_THRESHOLD } from '../app.constants';

@Injectable({
  providedIn: 'root',
})
export class SwipeService {
  constructor() {}

  /**
   * Listens to swipe events to the left and right that happen on or inside the element.
   * Ignores all swipe events that start their touch event on an element with the attribute "data-swipe-ignore"
   */
  getSwipeEvents(elementRef: ElementRef<HTMLElement>) {
    const touchStart$ = fromEvent<TouchEvent>(
      elementRef.nativeElement,
      'touchstart',
    ).pipe(
      filter(() => this.isMobile()),
      filter((event) => this.isInIgnoreZone(event)),
      tap((event) => console.log('touchstart', event)),
      shareReplay(1),
    );
    const touchEnd$ = fromEvent<TouchEvent>(
      elementRef.nativeElement,
      'touchend',
    ).pipe(
      filter(() => this.isMobile()),
      filter((event) => this.isInIgnoreZone(event)),
      tap(() => console.log('touchend')),
    );

    const swipe$ = touchEnd$.pipe(
      withLatestFrom(touchStart$),
      filter(([touchEnd, touchStart]) => {
        const swipeStartY = touchStart.touches[0]?.clientY;
        const swipeEndY = touchEnd.changedTouches[0]?.clientY;
        const swipeDistance = Math.abs(swipeStartY - swipeEndY);
        const isHorizontalSwipe = swipeDistance < SWIPE_Y_THRESHOLD;
        return isHorizontalSwipe;
      }),
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

  private isInIgnoreZone(event: TouchEvent) {
    const target = event.target;
    const isElement = target instanceof Element;
    if (!isElement) return true;

    const isInIgnoreZone = target.closest('[data-swipe-ignore]') != null;
    return !isInIgnoreZone;
  }
}
