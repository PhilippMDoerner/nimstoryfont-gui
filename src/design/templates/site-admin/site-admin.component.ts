import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PermissionGroup } from 'src/app/_models/auth';
import { BaseCampaignData, Campaign, WikiStatistics } from 'src/app/_models/campaign';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';

type UserState = 'CREATE' | 'DISPLAY';
type CampaignState = 'CREATE' | 'WAIT_WHILE_CREATING' | 'DISPLAY';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.component.html',
  styleUrls: ['./site-admin.component.scss']
})
export class SiteAdminComponent implements OnInit, OnChanges{
  @Input() users?: User[];
  @Input() campaigns?: Campaign[];
  @Input() allGroups?: PermissionGroup[];
  @Input() statistics?: WikiStatistics;
  @Input() serverUrl!: string;
  
  @Output() createCampaign: EventEmitter<BaseCampaignData> = new EventEmitter();
  @Output() createUser: EventEmitter<User> = new EventEmitter();
  @Output() addUserGroup: EventEmitter<{user: User, group: PermissionGroup}> = new EventEmitter();
  @Output() removeUserGroup: EventEmitter<{user: User, group: PermissionGroup}> = new EventEmitter();
  @Output() downloadDatabase: EventEmitter<void> = new EventEmitter();
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();
  
  campaignOverviewUrl!: string;
  
  userCards!: {isOpen: boolean, user: User}[];
  userState: UserState = 'DISPLAY';
  userModel!: Partial<User>;
  userFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "username", 
      inputKind: 'NAME', 
      required: true
    }),
    this.formlyService.buildConfirmedPasswordConfig({}),
    this.formlyService.buildInputConfig({
      key: "email", 
      inputKind: 'NAME', 
      required: false
    }),
  ];
  
  campaignState: CampaignState = 'DISPLAY';
  campaignModel!: Partial<BaseCampaignData>;
  campaignFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "name", 
      inputKind: 'NAME', 
      required: true, 
      maxLength: 40, 
      placeholder: "Your campaign's name..."
    }),
    this.formlyService.buildInputConfig({
      key: "subtitle", 
      inputKind: 'STRING', 
      required: false, 
      maxLength: 400, 
      placeholder: "The subtitle to show on the home page"
    }),
    this.formlyService.buildFileFieldConfig({
      key: "background_image", 
      required: true,
      fileButtonType: 'DARK',
    }),
    this.formlyService.buildFileFieldConfig({
      key: "icon", 
      required: true,
      fileButtonType: 'DARK',
    }),
  ];
  
  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ){}
  
  ngOnInit(): void {
    this.setCampaignOverviewUrl();
  }
  
  ngOnChanges(): void {
    this.setUserCards();
  }
  
  setUserState(newState: UserState): void{
    this.userState = newState;
    
    if(this.userState === 'CREATE'){
      this.userModel = {};
    }
  }
  
  createNewUser(newUser: Partial<User>): void{
    this.createUser.emit(newUser as User);
  }
  
  setCampaignState(newState: CampaignState): void{
    this.campaignState = newState;
    
    if(this.campaignState === 'CREATE'){
      this.campaignModel = {};
    }
  }
  
  createNewCampaign(newCampaign: Partial<BaseCampaignData>): void{
    this.createCampaign.emit(newCampaign as BaseCampaignData);
  }
   
  private setUserCards(): void{
    this.userCards = this.users
    ?.map(user => ({isOpen: false, user}))
    ?.sort((entry1, entry2) =>  entry1.user.username.toLowerCase() > entry2.user.username.toLowerCase() ? 1 : -1)
    ?? [];
  }
  
  private setCampaignOverviewUrl(): void{
    this.campaignOverviewUrl = this.routingService.getRoutePath('campaign-overview');
  }
}