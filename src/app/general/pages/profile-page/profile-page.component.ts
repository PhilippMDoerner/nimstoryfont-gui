import { Component } from '@angular/core';
import { map } from 'rxjs';
import { CampaignRole, UserData } from 'src/app/_models/token';
import { UserService } from 'src/app/_services/article/user.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { filterNil } from 'src/utils/rxjs-operators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  user$ = this.userService.thisUser.data$.pipe(filterNil());
  isCurrentUser$ = this.user$.pipe(
    map((user) => user.pk === this.tokenService.getCurrentUserPk()),
  );
  campaignName$ = this.paramsService.campaignNameParam$;
  memberships$ = this.tokenService.userData.data$.pipe(
    map((data) => this.mapMemberships(data)),
  );

  constructor(
    private tokenService: TokenService,
    private paramsService: GlobalUrlParamsService,
    private userService: UserService,
  ) {}

  private mapMemberships(
    data: UserData | undefined,
  ):
    | { campaignName: string; role: CampaignRole; isLeaving: boolean }[]
    | undefined {
    const memberships = this.tokenService.getCampaignMemberships(data);
    if (memberships == null) return undefined;

    const campaignNames = Object.keys(memberships);
    return campaignNames.map((name) => ({
      campaignName: name,
      role: memberships[name],
      isLeaving: false,
    }));
  }
}
