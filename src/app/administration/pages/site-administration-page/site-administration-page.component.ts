import { Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { SiteAdministrationPageStore } from './site-administration-page.store';
import { SiteAdminComponent } from '../../../../design/templates/site-admin/site-admin.component';

@Component({
    selector: 'app-site-administration-page',
    templateUrl: './site-administration-page.component.html',
    styleUrls: ['./site-administration-page.component.scss'],
    standalone: true,
    imports: [SiteAdminComponent],
})
export class SiteAdministrationPageComponent {
  readonly globalStore = inject(GlobalStore);
  readonly store = inject(SiteAdministrationPageStore);

  serverUrl = environment.backendDomain;
  allSiteUsers = this.store.allSiteUsers;
  allSiteCampaigns = this.store.allSiteCampaigns;
  siteStatistics = this.store.siteStatistics;
  allPermissionGroups = this.store.allPermissionGroups;

  constructor() {
    this.store.loadUsers();
    this.store.loadCampaigns();
    this.store.loadGroups();
    this.store.loadStatistics();
  }
}
