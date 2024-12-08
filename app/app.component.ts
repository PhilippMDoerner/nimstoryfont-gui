import { Component, computed, inject, NgZone, signal } from '@angular/core';
import { fadeOut } from 'src/design/animations/fadeIn';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { environment } from 'src/environments/environment';
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
  imports: [PageComponent, ToastOverlayComponent],
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
