import {
  computed,
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  output,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { map, merge, skip, Subject, switchMap, tap } from 'rxjs';
import {
  BindableHotkey,
  HotkeyService,
  UNBINDABLE_KEYSET,
} from '../_services/hotkey.service';

@Directive({
  selector: '[hotkey]',
  providers: [NgbTooltip],
})
export class HotkeyDirective implements OnDestroy {
  private tooltip = inject(NgbTooltip);
  private hotkeyService = inject(HotkeyService);

  hotkey = input.required<string>();
  showTooltip = input.required<boolean>();

  hotkeyPressed = output<KeyboardEvent>();

  private tooltipText = computed(() => `Alt + ${this.hotkey()}`);
  private destroyDirective$ = new Subject<void>();
  private teardownHotkeyBehavior$ = merge(
    toObservable(this.hotkey).pipe(
      skip(1),
      map(() => void 0),
    ),
    this.destroyDirective$,
  );

  constructor() {
    const element = inject(ElementRef<HTMLElement>);
    this.configureTooltip(element);

    toObservable(this.showTooltip)
      .pipe(takeUntilDestroyed())
      .subscribe((showTooltip) => this.syncTooltipOpenState(showTooltip));

    toObservable(this.hotkey)
      .pipe(
        map((key) => this.checkKey(key)),
        switchMap((key) =>
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

  ngOnDestroy(): void {
    console.log('Destroying hotkey directive');
    this.destroyDirective$.next();
    this.destroyDirective$.complete();
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

  private checkKey(key: string): BindableHotkey<any> {
    const canBindHotkey = !UNBINDABLE_KEYSET.has(key);
    if (!canBindHotkey) {
      throw new Error(`Tried to bind unbindable hotkey ${key}`);
    }
    return key as BindableHotkey<any>;
  }
}
