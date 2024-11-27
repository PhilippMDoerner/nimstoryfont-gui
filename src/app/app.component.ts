import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, NgZone, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime, map, startWith, take } from 'rxjs';
import { fadeOut } from 'src/design/animations/fadeIn';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { environment } from 'src/environments/environment';
import { SplashScreenComponent } from '../design/molecules/splash-screen/splash-screen.component';
import { PageComponent } from '../design/organisms/page/page.component';
import { ToastOverlayComponent } from '../design/organisms/toast-overlay/toast-overlay.component';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';
import { GlobalStore } from './global.store';
import { ServiceWorkerService } from './service-worker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    PageComponent,
    ToastOverlayComponent,
    SplashScreenComponent,
    AsyncPipe,
  ],
  host: {
    '[@.disabled]': 'disableAnimation()',
  },
  animations: [fadeOut],
})
export class AppComponent {
  readonly globalStore = inject(GlobalStore);
  readonly tokenService = inject(TokenService);
  readonly paramsService = inject(GlobalUrlParamsService);
  readonly campaignService = inject(CampaignService);
  readonly toastService = inject(ToastService);
  readonly serviceWorkerService = inject(ServiceWorkerService);
  readonly zone = inject(NgZone);

  serverUrl: string = environment.backendDomain;
  campaign$ = this.globalStore.currentCampaign;
  hasCampaignAdminRights$ = computed(() =>
    this.globalStore.isCampaignAdmin(this.globalStore.campaignName()),
  );
  disableAnimation = signal(false);
  hasReachedInitialStability$ = this.zone.onStable.pipe(
    debounceTime(250),
    map(() => true),
    startWith(false),
    takeUntilDestroyed(),
    take(2),
  );

  constructor() {
    this.trackAnimationSetting();
    this.serviceWorkerService.initializeServiceWorkerInteractions();
  }

  logout(): void {
    this.globalStore.logout();
  }

  private trackAnimationSetting() {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', (event) => {
      this.disableAnimation.set(event.matches);
    });
  }
}
