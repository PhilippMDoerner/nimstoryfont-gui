import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
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
  @Input() campaign?: Campaign;
  @Input() hasCampaignAdminPrivileges!: boolean;

  @Output() logout: EventEmitter<null> = new EventEmitter();

  serverUrl = environment.backendDomain;
  sidebarEntries: ArticleMetaData[] = SIDEBAR_ENTRIES;
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
