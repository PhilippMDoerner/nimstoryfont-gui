import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CoreStore } from '../core.store';

@Component({
  selector: 'app-campaign-overview-page',
  templateUrl: './campaign-overview-page.component.html',
  styleUrls: ['./campaign-overview-page.component.scss'],
})
export class CampaignOverviewPageComponent {
  private readonly signalStore = inject(CoreStore);

  serverUrl = environment.backendDomain;
  userName = this.signalStore.getCurrentUserName();
  isGlobalAdmin = this.signalStore.isGlobalAdmin();
  campaigns = this.signalStore.campaignsData;

  constructor() {
    this.signalStore.loadCampaigns();
  }

  logout(): void {
    this.signalStore.logout();
  }
}
