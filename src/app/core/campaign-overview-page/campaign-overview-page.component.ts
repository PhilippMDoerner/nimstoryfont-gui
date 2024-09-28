import { Component, inject, Signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthStore } from '../auth.store';
import { CoreStore } from '../core.store';

@Component({
  selector: 'app-campaign-overview-page',
  templateUrl: './campaign-overview-page.component.html',
  styleUrls: ['./campaign-overview-page.component.scss'],
})
export class CampaignOverviewPageComponent {
  private readonly coreStore = inject(CoreStore);
  private readonly authStore = inject(AuthStore);

  serverUrl = environment.backendDomain;
  userName = this.authStore.userName as Signal<string>;
  isGlobalAdmin = this.authStore.isGlobalAdmin;
  campaigns = this.coreStore.campaignsData;

  logout(): void {
    inject(AuthStore).logout();
  }
}
