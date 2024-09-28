import { Component, inject } from '@angular/core';
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
  serverUrl: string = environment.backendDomain;
  campaign = this.store.currentCampaign;

  logout(): void {
    inject(AuthStore).logout();
  }
}
