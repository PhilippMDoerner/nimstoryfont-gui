import {
  ChangeDetectionStrategy,
  Component,
  input,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, map } from 'rxjs';
import { filterNil } from 'src/utils/rxjs-operators';

@Component({
  selector: 'app-persistent-tooltip',
  imports: [NgbTooltip],
  templateUrl: './persistent-tooltip.component.html',
  styleUrl: './persistent-tooltip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersistentTooltipComponent {
  text = input.required<string>();
  showTooltip = input.required<boolean>();

  tooltip = viewChild<NgbTooltip>('t');

  constructor() {
    const tooltip$ = toObservable(this.tooltip).pipe(filterNil());
    const showTooltip$ = toObservable(this.showTooltip).pipe(
      map((x) => x ?? false),
    );

    combineLatest({ tooltip$, showTooltip$ })
      .pipe(takeUntilDestroyed())
      .subscribe(({ tooltip$, showTooltip$ }) => {
        this.syncTooltipState(tooltip$, showTooltip$);
      });
  }

  private syncTooltipState(
    tooltip: NgbTooltip | undefined,
    showTooltip: boolean,
  ) {
    if (!tooltip) return;
    if (showTooltip) {
      tooltip.open();
    } else {
      tooltip.close();
    }
  }
}
