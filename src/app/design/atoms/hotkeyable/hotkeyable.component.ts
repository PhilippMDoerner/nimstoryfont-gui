import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
  output,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { map, merge, Subject } from 'rxjs';
import {
  BindableHotkey,
  HotkeyService,
  UNBINDABLE_KEYSET,
} from 'src/app/_services/hotkey.service';
import { filterNil } from 'src/utils/rxjs-operators';
import { PersistentTooltipComponent } from '../persistent-tooltip/persistent-tooltip.component';

@Component({
  selector: 'app-hotkeyable',
  imports: [PersistentTooltipComponent],
  templateUrl: './hotkeyable.component.html',
  styleUrl: './hotkeyable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotkeyableComponent implements OnDestroy {
  hotkey = input.required<string>();
  showTooltip = input.required<boolean>();

  hotkeyPressed = output<KeyboardEvent>();
  tooltip = computed(() => `Alt + ${this.hotkey()}`);

  private hotkeyService = inject(HotkeyService);
  private destroyComponent$ = new Subject<void>();
  private teardownHotkeyBehavior$ = merge(
    toObservable(this.hotkey).pipe(
      filterNil(),
      map(() => void 0),
    ),
    this.destroyComponent$,
  );

  constructor() {
    effect(() => {
      const hotkey = this.hotkey();
      const canBindHotkey = !UNBINDABLE_KEYSET.has(hotkey);
      if (!canBindHotkey) {
        throw new Error(`Tried to bind unbindable hotkey ${hotkey}`);
      }

      this.hotkeyService.registerHotkey(
        hotkey as BindableHotkey<any>,
        (event) => this.hotkeyPressed.emit(event),
        this.teardownHotkeyBehavior$,
      );
    });
  }

  ngOnDestroy(): void {
    this.destroyComponent$.next();
    this.destroyComponent$.complete();
  }
}
