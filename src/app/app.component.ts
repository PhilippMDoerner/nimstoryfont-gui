import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { fadeOut } from 'src/app/design/animations/fadeIn';
import { ToastService } from 'src/app/design/organisms/toast-overlay/toast-overlay.component';
import { environment } from 'src/environments/environment';
import { filterNil } from 'src/utils/rxjs-operators';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';
import { AuthStore } from './auth.store';
import { HotkeyModalComponent } from './design/organisms/hotkey-modal/hotkey-modal.component';
import { PageComponent } from './design/organisms/page/page.component';
import { ToastOverlayComponent } from './design/organisms/toast-overlay/toast-overlay.component';
import { GlobalStore } from './global.store';
import { ServiceWorkerService } from './service-worker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    PageComponent,
    ToastOverlayComponent,
    AsyncPipe,
    JsonPipe,
    HotkeyModalComponent,
  ],
  host: {
    '[@.disabled]': 'disableAnimation()',
  },
  animations: [fadeOut],
})
export class AppComponent {
  readonly globalStore = inject(GlobalStore);
  readonly authStore = inject(AuthStore);
  readonly tokenService = inject(TokenService);
  readonly paramsService = inject(GlobalUrlParamsService);
  readonly campaignService = inject(CampaignService);
  readonly toastService = inject(ToastService);
  readonly serviceWorkerService = inject(ServiceWorkerService);
  readonly currentUrl$ = inject(Router).events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map((event) => event.url.split('#')[0]), //Remove any fragment it might have
    filterNil(),
  );

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
    this.authStore.logout();
  }

  private trackAnimationSetting() {
    afterNextRender(() => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      mediaQuery.addEventListener('change', (event) => {
        this.disableAnimation.set(event.matches);
      });
    });
  }
}
