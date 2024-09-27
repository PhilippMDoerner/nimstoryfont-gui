import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CampaignOverview } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrls: ['./campaign-overview.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class CampaignOverviewComponent implements OnInit {
  @Input() serverUrl!: string;
  @Input() userName?: string;
  @Input() campaigns?: CampaignOverview[];
  @Input() isGlobalAdmin: boolean = false;

  @Output() logout: EventEmitter<void> = new EventEmitter();

  profileUrl?: string;
  generalAdminUrl?: string;
  configTableUrl?: string;
  dragonFrameUrl = '/assets/dragon-frame.jpg';

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.profileUrl = this.routingService.getRoutePath('direct-profile', {
      username: this.userName,
    });
    this.configTableUrl = this.routingService.getRoutePath('config-tables');
    this.generalAdminUrl = this.routingService.getRoutePath('admin');
  }

  onCampaignClick(event: CampaignOverview): void {
    this.routingService.routeToPath('home', { campaign: event.name });
  }
}
