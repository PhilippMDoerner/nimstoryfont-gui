import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { TokenService } from 'src/app/_services/utils/token.service';
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
  serverUrl = environment.backendDomain;
  userName$ = this.tokenService.userData.data$.pipe(
    map((data) => data?.userName),
  );
  isGlobalAdmin$ = this.tokenService.isGlobalAdmin$;
  campaigns$ = this.campaignService.campaignOverview.data$;

  constructor(
    private tokenService: TokenService,
    private campaignService: CampaignService,
  ) {}

  logout(): void {
    this.tokenService.logout();
  }
}
