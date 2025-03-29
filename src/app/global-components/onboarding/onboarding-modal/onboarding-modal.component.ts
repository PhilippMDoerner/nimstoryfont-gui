import { CdkStep } from '@angular/cdk/stepper';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, filter } from 'rxjs';
import { HotkeyService } from 'src/app/_services/hotkey.service';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { PreferencesStore } from 'src/app/preferences.store';
import { componentId } from 'src/utils/DOM';
import { takeOnceOrUntilDestroyed } from 'src/utils/rxjs-operators';
import { OnboardingStepperComponent } from '../onboarding-stepper/onboarding-stepper.component';

@Component({
  selector: 'app-onboarding-modal',
  imports: [ButtonComponent, OnboardingStepperComponent],
  templateUrl: './onboarding-modal.component.html',
  styleUrl: './onboarding-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingModalComponent {
  isCampaignAdmin = input<boolean>();

  modalService = inject(NgbModal);
  preferencesStore = inject(PreferencesStore);

  activeStepElement = signal<CdkStep | undefined>(undefined);

  modalTitle = `${componentId()}-onboarding-modal-title`;

  constructor(hotkeyService: HotkeyService) {
    hotkeyService
      .watch('o')
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.openModal());

    combineLatest({
      metadata: toObservable(this.preferencesStore.general),
      queryState: toObservable(this.preferencesStore.generalQueryState),
    })
      .pipe(
        filter(
          ({ queryState }) =>
            queryState === 'success' || queryState === 'error',
        ),
        takeOnceOrUntilDestroyed(),
        filter(({ metadata }) => !metadata?.hasSeenOnboarding),
      )
      .subscribe(() => this.openModal());
  }

  openModal() {
    if (this.modalService.hasOpenModals()) return;
    if (!this.preferencesStore.general()?.hasSeenOnboarding) {
      this.trackOnboardingVisit();
    }

    this.modalService.open(OnboardingModalComponent, {
      modalDialogClass: 'onboarding-modal',
      centered: true,
      ariaLabelledBy: this.modalTitle,
    });
  }

  dismiss() {
    this.modalService.dismissAll();
  }

  private trackOnboardingVisit() {
    this.preferencesStore.createMetaDataEntry({
      category: 'general',
      name: 'hasSeenOnboarding',
      value: 'true',
    });
  }
}
