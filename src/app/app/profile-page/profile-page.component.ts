import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable, filter, map } from 'rxjs';
import { CampaignMemberships } from 'src/app/_models/token';
import { User } from 'src/app/_models/user';
import { TokenService } from 'src/app/_services/utils/token.service';
import { CampaignMembership } from 'src/design/templates/_models/campaign-membership';
import { selectCurrentCampaignName, selectCurrentUser } from '../app.reducer';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  user$!: Observable<User>;
  isCurrentUser$!: Observable<boolean>;
  campaignName$!: Observable<string>;
  memberships!: CampaignMembership[];

  constructor(
    private tokenService: TokenService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.user$ = this.store
      .select(selectCurrentUser)
      .pipe(filter((user) => !_.isNil(user))) as Observable<User>;

    const userId = this.tokenService.getCurrentUserPk();
    this.isCurrentUser$ = this.user$.pipe(map((user) => user.pk === userId));

    this.campaignName$ = this.store
      .select(selectCurrentCampaignName)
      .pipe(filter((name) => !_.isNil(name))) as Observable<string>;

    this.setMemberships();
  }

  private setMemberships(): void {
    const memberships: CampaignMemberships =
      this.tokenService.getCampaignMemberships();
    const campaignNames = Object.keys(memberships);
    this.memberships = campaignNames.map((name) => ({
      campaignName: name,
      role: memberships[name],
      isLeaving: false,
    }));
  }
}
