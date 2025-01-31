import { DOCUMENT } from '@angular/common';
import { afterNextRender, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  EMPTY,
  filter,
  fromEvent,
  map,
  merge,
  Observable,
  shareReplay,
  startWith,
  tap,
} from 'rxjs';

const UNBINDABLE_HOTKEYS = [
  '',
  'a',
  'A',
  'b',
  'B',
  'c',
  'C',
  'd',
  'D',
  'f',
  'F',
  'g',
  'G',
  'h',
  'H',
  'j',
  'J',
  'k',
  'K',
  'l',
  'L',
  'n',
  'N',
  'q',
  'Q',
  'r',
  'R',
  't',
  'T',
  'w',
  'W',
  'x',
  'X',
  'z',
  'Z',
] as const;
export const UNBINDABLE_KEYSET = new Set<string>(UNBINDABLE_HOTKEYS);
type UnbindableHotkey = (typeof UNBINDABLE_HOTKEYS)[number];

type NotA<T> = T extends UnbindableHotkey ? never : T;
type NotB<T> = UnbindableHotkey extends T ? never : T;
export type BindableHotkey<T> = NotA<T> & NotB<T>;

@Injectable({
  providedIn: 'root',
})
export class HotkeyService {
  private hotkeyDown$: Observable<KeyboardEvent> | undefined;
  public isHotkeyActive$: Observable<boolean> | undefined; //Undefined on Server

  constructor() {
    const window = inject(DOCUMENT).defaultView;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (window) {
        const keydownEvents$ = fromEvent<KeyboardEvent>(window, 'keydown');
        const keyupEvents$ = fromEvent<KeyboardEvent>(window, 'keyup');

        this.hotkeyDown$ = this.toHotkeydownEvents(keydownEvents$).pipe(
          takeUntilDestroyed(destroyRef),
        );
        this.isHotkeyActive$ = this.toIsHotkeyActive(
          keydownEvents$,
          keyupEvents$,
        ).pipe(takeUntilDestroyed(destroyRef));
      }
    });
  }

  /**
   * Registers a @key to trigger an @onKeydown callback for the lifetime of the given @destroyRef.
   * @onKeyDown will get triggered everytime @key gets invoked as either:
   * - alt + @key
   * - alt + ctrl + @key (This is mostly relevant for firefox which displays a few menus when alt is pressed)
   */
  watch<T>(key: BindableHotkey<T>): Observable<KeyboardEvent> {
    if (!window || !this.hotkeyDown$) return EMPTY;

    console.log('Registering hotkey: ', key, !!this.hotkeyDown$);
    return this.hotkeyDown$.pipe(
      filter((event) => event.key === key),
      tap((event) => event.preventDefault()),
    );
  }

  private toHotkeydownEvents(
    keydownEvents$: Observable<KeyboardEvent>,
  ): Observable<KeyboardEvent> {
    return keydownEvents$.pipe(
      tap((event) => console.log('keydown', event)),
      filter((event) => event.altKey && !UNBINDABLE_KEYSET.has(event.key)),
      shareReplay(1),
    );
  }

  private toIsHotkeyActive(
    keydownEvents$: Observable<KeyboardEvent>,
    keyupEvents$: Observable<KeyboardEvent>,
  ): Observable<boolean> {
    const isAltKeyDown$ = keydownEvents$.pipe(
      filter((event) => event.key === 'Alt'),
      map(() => true),
    );
    const isAltKeyUp$ = keyupEvents$.pipe(
      filter((event) => event.key === 'Alt'),
      map(() => false),
    );
    return merge(isAltKeyDown$, isAltKeyUp$).pipe(
      startWith(false),
      shareReplay(1),
    );
  }
}
