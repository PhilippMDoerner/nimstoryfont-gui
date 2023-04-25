import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { CampaignRole, UserData } from 'src/app/_models/token';
import { RoutingService } from 'src/app/_services/routing.service';
import { ArticleMetaData } from '../_model/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() campaign!: Campaign;
  @Input() user!: UserData;
  @Input() sidebarEntries!: ArticleMetaData[]; 
  
  @Output() logout: EventEmitter<null> = new EventEmitter();
  
  isAdmin: boolean = false;
  campaignOverviewUrl: string = this.routingService.getRoutePath('campaign-overview');
  campaignAdminUrl!: string;
  homeUrl!: string;
  profileUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.homeUrl = this.routingService.getRoutePath('home', {campaign: this.campaign.name});
    this.campaignAdminUrl = this.routingService.getRoutePath('campaign-admin', {campaign: this.campaign.name});
    this.profileUrl = this.routingService.getRoutePath('direct-campaign-profile', {username: this.user.userName, campaign: this.campaign.name });
    
    const role: CampaignRole = this.user.campaignMemberships[this.campaign.name];
    const isCampaignAdmin = role === 'admin';
    const isSiteAdmin = this.user.isAdmin || this.user.isSuperUser;
    this.isAdmin = isCampaignAdmin || isSiteAdmin;
  }
}
