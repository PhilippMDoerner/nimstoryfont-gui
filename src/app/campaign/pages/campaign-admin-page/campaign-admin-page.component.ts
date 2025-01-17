import { Component, inject } from '@angular/core';
import { CampaignAdminComponent } from 'src/app/design/templates/campaign-admin/campaign-admin.component';
import { environment } from 'src/environments/environment';
import { CampaignAdminPageStore } from './campaign-admin-page.store';

@Component({
  selector: 'app-campaign-admin-page',
  imports: [CampaignAdminComponent],
  providers: [CampaignAdminPageStore],
  templateUrl: './campaign-admin-page.component.html',
  styleUrl: './campaign-admin-page.component.scss',
})
export class CampaignAdminPageComponent {
  readonly store = inject(CampaignAdminPageStore);
  campaign = this.store.campaign;
  serverUrl = environment.backendDomain;

  constructor() {
    this.store.loadCampaign();
    this.store.loadCampaignStatistics();
    this.store.loadUsers();
  }
}
