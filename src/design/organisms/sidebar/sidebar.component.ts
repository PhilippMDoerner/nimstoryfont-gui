import {
  Component,
  computed,
  EventEmitter,
  input,
  OnChanges,
  Output,
  Signal,
} from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { environment } from 'src/environments/environment';
import { ArticleMetaData, SIDEBAR_ENTRIES } from '../_model/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  campaign = input<Campaign | undefined>(undefined);
  hasCampaignAdminPrivileges = input<boolean>(false);

  @Output() logout: EventEmitter<null> = new EventEmitter();

  serverUrl = environment.backendDomain;
  sidebarEntries: Signal<ArticleMetaData[]> = computed(() =>
    SIDEBAR_ENTRIES.map((entry) => {
      const route = this.routingService.hasRoutePath(entry.route)
        ? this.routingService.getRoutePath(entry.route, {
            campaign: this.campaign()?.name,
          })
        : entry.route;
      return {
        ...entry,
        route,
      };
    }),
  );

  campaignOverviewUrl: string =
    this.routingService.getRoutePath('campaign-overview');
  campaignAdminUrl!: string;
  homeUrl!: string;
  profileUrl!: string;

  constructor(private routingService: RoutingService) {}

  ngOnChanges(): void {
    this.setUrls();
  }

  private setUrls(): void {
    if (this.campaign) {
      this.homeUrl = this.routingService.getRoutePath('home', {
        campaign: this.campaign.name,
      });
      this.campaignAdminUrl = this.routingService.getRoutePath(
        'campaign-admin',
        { campaign: this.campaign.name },
      );
      this.profileUrl = this.routingService.getRoutePath(
        'direct-campaign-profile',
        { campaign: this.campaign.name },
      );
    }
  }
}
