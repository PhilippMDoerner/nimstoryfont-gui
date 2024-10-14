import { Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { slideInOut } from 'src/design/animations/slideInOut';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-campaign-overview-page',
  templateUrl: './campaign-overview-page.component.html',
  styleUrls: ['./campaign-overview-page.component.scss'],
  host: {
    '[@slideInOut]': '',
  },
  animations: [slideInOut],
})
export class CampaignOverviewPageComponent {
  public readonly globalStore = inject(GlobalStore);
  serverUrl = environment.backendDomain;

  logout(): void {
    this.globalStore.logout();
  }
}
