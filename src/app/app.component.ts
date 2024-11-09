import { Component, computed, inject } from '@angular/core';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { environment } from 'src/environments/environment';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';
import { GlobalStore } from './global.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly globalStore = inject(GlobalStore);
  readonly tokenService = inject(TokenService);
  readonly paramsService = inject(GlobalUrlParamsService);
  readonly campaignService = inject(CampaignService);
  readonly toastService = inject(ToastService);

  serverUrl: string = environment.backendDomain;
  campaign$ = this.globalStore.currentCampaign;
  hasCampaignAdminRights$ = computed(() =>
    this.globalStore.isCampaignAdmin(this.globalStore.campaignName()),
  );

  constructor() {
    this.toastService.addToast({
      type: 'INFO',
      header: { text: 'Application started!' },
      body: {
        text: 'New toast text on boot',
        buttons: [
          {
            label: 'Click me',
            onClick: (dismiss) => dismiss(),
          },
        ],
      },
      onHide: () => console.log('Hidden CB'),
      onShow: () => console.log('Show CB'),
    });
  }

  logout(): void {
    this.globalStore.logout();
  }
}
