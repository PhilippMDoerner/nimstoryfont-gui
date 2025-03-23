import { CdkStep, CdkStepperModule } from '@angular/cdk/stepper';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  viewChild,
} from '@angular/core';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { SuccessAnimationComponent } from 'src/app/design/atoms/success-animation/success-animation.component';
import { StepperComponent } from 'src/app/design/organisms/stepper/stepper.component';

@Component({
  selector: 'app-onboarding-stepper',
  imports: [
    StepperComponent,
    CdkStepperModule,
    IconComponent,
    SuccessAnimationComponent,
  ],
  templateUrl: './onboarding-stepper.component.html',
  styleUrl: './onboarding-stepper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingStepperComponent {
  isCampaignAdmin = input<boolean>();

  selectionChange = output<CdkStep>();
  firstStep = viewChild.required<CdkStep>('firstStep');

  constructor() {
    effect(() => this.selectionChange.emit(this.firstStep()));
  }
}
