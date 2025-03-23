import { CdkStepper } from '@angular/cdk/stepper';
import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, withLatestFrom } from 'rxjs';
import { componentId } from 'src/utils/DOM';
import { ButtonComponent } from '../../atoms/button/button.component';

type AnimationState = 'ENTER' | 'EXIT' | 'NONE';
const ANIMATION_STATES: {
  [key in AnimationState]: { next: AnimationState; prior: AnimationState };
} = {
  ENTER: {
    next: 'NONE',
    prior: 'EXIT',
  },
  EXIT: {
    next: 'ENTER',
    prior: 'NONE',
  },
  NONE: {
    next: 'EXIT',
    prior: 'ENTER',
  },
};

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  imports: [NgTemplateOutlet, ButtonComponent, AsyncPipe],
  host: {
    '[attr.aria-labelledby]': 'id',
  },
})
export class StepperComponent extends CdkStepper {
  stepContainer = viewChild.required('stepContentContainer');

  destroyRef = inject(DestroyRef);

  animationState = signal<'ENTER' | 'EXIT' | 'NONE'>('NONE');
  animationDirection = signal<'FORWARD' | 'BACKWARD'>('FORWARD');
  animationEnd$ = new Subject<AnimationState>();
  stepIndexChange$ = new Subject<number>();

  private readonly id = componentId();
  readonly contentId = `stepper-content-${this.id}`;

  constructor() {
    super();
    this.setupAnimationBehavior();
  }

  selectNextStep(): void {
    const maxStepIndex = this.steps.length - 1;
    if (this.selectedIndex === maxStepIndex) return;

    const nextIndex = this.selectedIndex + 1;
    this.stepIndexChange$.next(nextIndex);
    this.animationDirection.set('FORWARD');
    this.startAnimation();
  }

  selectPriorStep(): void {
    if (this.selectedIndex === 0) return;

    const nextIndex = this.selectedIndex - 1;
    this.stepIndexChange$.next(nextIndex);
    this.animationDirection.set('BACKWARD');
    this.startAnimation();
  }

  startAnimation() {
    this.animationEnd$.next('EXIT');
  }

  toNextAnimationState(state: AnimationState): AnimationState {
    switch (this.animationDirection()) {
      case 'FORWARD':
        return ANIMATION_STATES[state].next;
      case 'BACKWARD':
        return ANIMATION_STATES[state].prior;
    }
  }

  private setupAnimationBehavior() {
    this.animationEnd$
      .pipe(
        withLatestFrom(this.stepIndexChange$),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(([nextAnimationState, newStepIndex]) => {
        if (this.isAboutToShowNextStep(nextAnimationState)) {
          this.selectedIndex = newStepIndex;
        }

        this.animationState.set(nextAnimationState);
      });
  }

  private isAboutToShowNextStep(nextAnimationState: AnimationState) {
    switch (this.animationDirection()) {
      case 'FORWARD':
        return nextAnimationState === 'ENTER';
      case 'BACKWARD':
        return nextAnimationState === 'EXIT';
    }
  }
}
