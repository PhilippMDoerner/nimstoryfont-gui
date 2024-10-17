import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { CampaignAdminPageStore } from './campaign-admin-page.store';

@Component({
  selector: 'app-campaign-admin-page',
  standalone: true,
  imports: [TemplatesModule, AsyncPipe, JsonPipe],
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
