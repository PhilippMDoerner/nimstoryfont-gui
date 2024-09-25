import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/_models/image';
import { Organization } from 'src/app/_models/organization';
import { RoutingService } from 'src/app/_services/routing.service';
import { ListEntry } from '../../molecules';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit, OnChanges{
  @Input() organization!: Organization;
  @Input() serverUrl!: string;
  @Input() imageServerModel?: Image;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() organizationDelete: EventEmitter<Organization> = new EventEmitter();
  
  overviewUrl!: string;
  updateUrl!: string;
  organizationMembers!: ListEntry[];
  headquarterUrl!: string;
  leaderUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.organization.campaign_details?.name;

    this.overviewUrl = this.routingService.getRoutePath(
      'organization-overview', 
      {campaign: campaignName}
    );
    this.setUrls();
    this.setOrganizationMembers();
  }
  
  ngOnChanges(): void {
    this.setUrls()
    this.setOrganizationMembers();
  }
  
  routeToCharacterCreation(){
    this.routingService.routeToPath(
      'character-create',
      { campaign: this.organization.campaign_details?.name}
    );
  }
  
  private setOrganizationMembers(): void{
    this.organizationMembers = this.organization.members
      ?.map( member => ({
        label: member.name,
        link: this.routingService.getRoutePath(
          'character',
          {
            campaign: this.organization.campaign_details?.name,
            name: member.name,
          }
        )
      })
    ) ?? [];
  }
  
  private setUrls(): void{
    const campaignName = this.organization.campaign_details?.name;
    this.updateUrl = this.routingService.getRoutePath(
      'organization-update',
      {
        campaign: campaignName,
        name: this.organization.name
      }
    );
    
    this.headquarterUrl = this.routingService.getRoutePath(
      'location',
      {
        campaign: campaignName,
        name: this.organization.headquarter_details?.name,
        parent_name: this.organization.headquarter_details?.parent_name
      }
    );
    
    this.leaderUrl = this.routingService.getRoutePath(
      'character',
      {
        campaign: campaignName,
        name: this.organization.leader,
      }
    );
  }
}
