import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable, filter, map } from 'rxjs';
import { CampaignRole, UserData } from 'src/app/_models/token';
import { User } from 'src/app/_models/user';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { selectCurrentUser } from '../app.reducer';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user$!: Observable<User>;
  isCurrentUser$!: Observable<boolean>;
  campaignName$ = this.paramsService.campaignNameParam$;
  memberships$ = this.tokenService.userData.data.pipe(
    map((data) => this.mapMemberships(data)),
  );

  constructor(
    private tokenService: TokenService,
    private store: Store,
    private paramsService: GlobalUrlParamsService,
  ) {}

  ngOnInit(): void {
    this.user$ = this.store
      .select(selectCurrentUser)
      .pipe(filter((user) => !_.isNil(user))) as Observable<User>;

    const userId = this.tokenService.getCurrentUserPk();
    this.isCurrentUser$ = this.user$.pipe(map((user) => user.pk === userId));
  }

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
