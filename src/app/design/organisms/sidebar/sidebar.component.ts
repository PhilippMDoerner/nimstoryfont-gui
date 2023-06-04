import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { ArticleMetaData, SIDEBAR_ENTRIES } from '../_model/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  @Input() campaign!: Campaign;
  
  @Output() logout: EventEmitter<null> = new EventEmitter();
  
  sidebarEntries: ArticleMetaData[] = SIDEBAR_ENTRIES; 
  isAdmin: boolean = false;
  campaignOverviewUrl: string = this.routingService.getRoutePath('campaign-overview');
  campaignAdminUrl!: string;
  homeUrl!: string;
  profileUrl!: string;
  
  constructor(
    private routingService: RoutingService,
    private tokenService: TokenService,
  ){}
  
  ngOnInit(): void {
    this.setUrls();
    this.setIsAdmin(); 
  }
  
  private setUrls(): void{
    const userName = this.tokenService.getCurrentUserName();

    this.homeUrl = this.routingService.getRoutePath('home', {campaign: this.campaign.name});
    this.campaignAdminUrl = this.routingService.getRoutePath('campaign-admin', {campaign: this.campaign.name});
    this.profileUrl = this.routingService.getRoutePath('direct-campaign-profile', {username: userName, campaign: this.campaign.name });
  }
  
  private setIsAdmin(): void{
    const isCampaignAdmin = this.tokenService.isCampaignAdmin(this.campaign.name);
    const isSiteAdmin = this.tokenService.isAdmin() || this.tokenService.isSuperUser();
    this.isAdmin = isCampaignAdmin || isSiteAdmin;
  }
}
