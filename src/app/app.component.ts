import { Component, inject } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly tokenService = inject(TokenService);
  readonly paramsService = inject(GlobalUrlParamsService);
  readonly campaignService = inject(CampaignService);

  serverUrl: string = environment.backendDomain;
  campaign$ = this.paramsService.currentCampaign;
  hasCampaignAdminRights$ = this.campaign$.pipe(
    switchMap((campaign) => {
      const campaignName = campaign?.name;
      if (campaignName == null) return of(false);
      return this.tokenService.isCampaignAdmin(campaignName);
    }),
  );

  logout(): void {
    this.tokenService.logout();
  }
}
