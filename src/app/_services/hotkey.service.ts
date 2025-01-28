import { DOCUMENT } from '@angular/common';
import { afterNextRender, DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, fromEvent, Observable, tap } from 'rxjs';

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
const UNBINDABLE_KEYSET = new Set<string>(UNBINDABLE_HOTKEYS);
type UnbindableHotkey = (typeof UNBINDABLE_HOTKEYS)[number];

type NotA<T> = T extends UnbindableHotkey ? never : T;
type NotB<T> = UnbindableHotkey extends T ? never : T;
type BindableHotkey<T> = NotA<T> & NotB<T>;

@Injectable({
  providedIn: 'root',
})
export class HotkeyService {
  private hotkeyDown$: Observable<KeyboardEvent> | undefined;

  constructor() {
    const window = inject(DOCUMENT).defaultView;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (window) {
        const keydownEvents$ = fromEvent<KeyboardEvent>(window, 'keydown');

        this.hotkeyDown$ = keydownEvents$.pipe(
          // tap((event) => console.log('keydown', event)),
          filter((event) => event.altKey && !UNBINDABLE_KEYSET.has(event.key)),
          takeUntilDestroyed(destroyRef),
        );
      }
    });
  }

  /**
   * Registers a @key to trigger an @onKeydown callback for the lifetime of the given @destroyRef.
   * @onKeyDown will get triggered everytime @key gets invoked as either:
   * - alt + @key
   * - alt + ctrl + @key (This is mostly relevant for firefox which displays a few menus when alt is pressed)
   */
  registerHotkey<T>(
    key: BindableHotkey<T>,
    onKeydown: (key: KeyboardEvent) => void,
    destroyRef: DestroyRef,
  ) {
    afterNextRender(() => {
      console.log('Registering hotkey: ', key, !!this.hotkeyDown$);
      if (!this.hotkeyDown$) return;
      this.hotkeyDown$
        .pipe(
          takeUntilDestroyed(destroyRef),
          filter((event) => event.key === key),
          tap((event) => event.preventDefault()),
        )
        .subscribe(onKeydown);
    });
  }
}
