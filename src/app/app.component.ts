import { Component, computed, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthStore } from './core/auth.store';
import { CoreStore } from './core/core.store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly store = inject(CoreStore);
  readonly authStore = inject(AuthStore);
  serverUrl: string = environment.backendDomain;
  campaign = this.store.currentCampaign;
  hasCampaignAdminPrivileges = computed(() =>
    this.authStore.hasCampaignAdminRights(this.store.currentCampaignName()),
  );

  logout(): void {
    inject(AuthStore).logout();
  }
}
