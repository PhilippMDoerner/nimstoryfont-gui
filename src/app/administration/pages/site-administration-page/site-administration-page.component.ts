import { Component, inject } from '@angular/core';
import { GroupService } from 'src/app/_services/article/group.service';
import { UserService } from 'src/app/_services/article/user.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-site-administration-page',
  templateUrl: './site-administration-page.component.html',
  styleUrls: ['./site-administration-page.component.scss'],
})
export class SiteAdministrationPageComponent {
  serverUrl = environment.backendDomain;
  readonly userService = inject(UserService);
  readonly campaignService = inject(CampaignService);
  readonly groupService = inject(GroupService);
  allSiteUsers$ = this.userService.list.data$;
  allSiteCampaigns$ = this.campaignService.list.data$;
  siteStatistics$ = this.campaignService.statistics.data$;
  allPermissionGroups$ = this.groupService.list.data$;
}
