import { Component, computed, inject } from '@angular/core';
import { CampaignRole, UserData } from 'src/app/_models/token';
import { RoutingService } from 'src/app/_services/routing.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { GlobalStore } from 'src/app/global.store';
import { NavigationStore } from 'src/app/navigation.store';
import { ProfileComponent } from '../../../../design/templates/profile/profile.component';
import { ProfilePageStore } from './profile-page.store';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.scss'],
    providers: [ProfilePageStore],
    imports: [ProfileComponent]
})
export class ProfilePageComponent {
  globalStore = inject(GlobalStore);
  profilePageStore = inject(ProfilePageStore);
  navStore = inject(NavigationStore);
  routingService = inject(RoutingService);

  user$ = this.profilePageStore.user;
  isCurrentUser$ = computed(
    () => this.user$()?.pk === this.globalStore.currentUserPk(),
  );
  campaignName$ = this.globalStore.campaignName;
  memberships$ = computed(() => {
    return this.mapMemberships(this.globalStore.userData());
  });
  backUrl = computed(
    () =>
      this.navStore.priorUrl() ??
      this.routingService.getRoutePath('campaign-overview'),
  );

  constructor(private tokenService: TokenService) {
    this.profilePageStore.loadThisUser();
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
