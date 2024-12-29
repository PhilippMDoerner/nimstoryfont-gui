import { Injectable } from '@angular/core';
import { fromEvent, map, merge, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OnlineService {
  public online$ = merge(
    fromEvent(window, 'online').pipe(map(() => true)),
    fromEvent(window, 'offline').pipe(map(() => false)),
  ).pipe(startWith(window.navigator.onLine));
}
