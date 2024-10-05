import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/article/user.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { environment } from 'src/environments/environment';
import { filterNil, takeFirstNonNil } from 'src/utils/rxjs-operators';
import { TemplatesModule } from '../../../../design/templates/templates.module';

@Component({
  selector: 'app-campaign-admin-page',
  standalone: true,
  imports: [TemplatesModule, AsyncPipe],
  templateUrl: './campaign-admin-page.component.html',
  styleUrl: './campaign-admin-page.component.scss',
})
export class CampaignAdminPageComponent {
  serverUrl = environment.backendDomain;
  campaign$ = this.campaignService.read.data;
  users = toSignal(this.userService.list.data.pipe(filterNil()));
  campaignStatistics$ = this.campaignService.statistics.data;

  constructor(
    private userService: UserService,
    private campaignService: CampaignService,
  ) {}

  addMemberToCampaignGroup(type: 'ADMIN' | 'MEMBER' | 'GUEST', user: User) {
    this.campaign$.pipe(takeFirstNonNil()).subscribe((campaign) => {
      switch (type) {
        case 'ADMIN':
          this.campaignService.runAddAdmin(campaign.name, user);
          break;
        case 'MEMBER':
          this.campaignService.runAddMember(campaign.name, user);
          break;
        case 'GUEST':
          this.campaignService.runAddGuest(campaign.name, user);
      }

      this.campaignService.loadRead(campaign.pk);
    });
  }

  async removeMemberFromCampaignGroup(
    type: 'ADMIN' | 'MEMBER' | 'GUEST',
    user: User,
  ) {
    this.campaign$.pipe(takeFirstNonNil()).subscribe((campaign) => {
      switch (type) {
        case 'ADMIN':
          this.campaignService.runRemoveAdmin(campaign.name, user);
          break;
        case 'MEMBER':
          this.campaignService.runRemoveMember(campaign.name, user);
          break;
        case 'GUEST':
          this.campaignService.runRemoveGuest(campaign.name, user);
          break;
      }
      this.campaignService.loadRead(campaign.pk);
    });
  }
}
