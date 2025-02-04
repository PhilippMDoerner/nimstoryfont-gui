import {
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  output,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { map, switchMap, tap } from 'rxjs';
import {
  BindableHotkey,
  HotkeyService,
  UNBINDABLE_KEYSET,
} from '../_services/hotkey.service';
import { ScreenService } from '../_services/screen.service';

@Directive({
  selector: '[hotkey]',
  providers: [NgbTooltip],
})
export class HotkeyDirective {
  private tooltip = inject(NgbTooltip);
  private hotkeyService = inject(HotkeyService);

  hotkey = input.required<string | undefined>();
  showTooltip = input.required<boolean>();

  hotkeyPressed = output<KeyboardEvent>();

  private tooltipText = computed(() =>
    this.hotkey() ? `Alt + ${this.hotkey()?.toUpperCase()}` : undefined,
  );

  constructor() {
    if (inject(ScreenService).isMobile()) return;

    const element = inject(ElementRef<HTMLElement>);
    this.configureTooltip(element);

    toObservable(this.showTooltip)
      .pipe(takeUntilDestroyed())
      .subscribe((showTooltip) => this.syncTooltipOpenState(showTooltip));

    toObservable(this.hotkey)
      .pipe(
        map((key) => this.checkKey(key)),
        switchMap((key: BindableHotkey<any> | undefined) =>
          this.hotkeyService
            .watch(key)
            .pipe(tap((event) => this.hotkeyPressed.emit(event))),
        ),
        takeUntilDestroyed(),
      )
      .subscribe();

    toObservable(this.tooltipText)
      .pipe(takeUntilDestroyed())
      .subscribe((tooltipText) => (this.tooltip.ngbTooltip = tooltipText));
  }

  private configureTooltip(element: ElementRef<HTMLElement>) {
    this.tooltip.triggers = '';
    this.tooltip.positionTarget = element.nativeElement;
  }

  private syncTooltipOpenState(showTooltip: boolean) {
    if (showTooltip) {
      this.tooltip.open();
    } else {
      this.tooltip.close();
    }
  }

  private checkKey(key: string | undefined): BindableHotkey<any> | undefined {
    if (!key) return undefined;

    const canBindHotkey = !UNBINDABLE_KEYSET.has(key);
    if (!canBindHotkey) {
      throw new Error(`Tried to bind unbindable hotkey ${key}`);
    }
    return key as BindableHotkey<any>;
  }
}
