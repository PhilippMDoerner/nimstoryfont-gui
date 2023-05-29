import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as _ from 'lodash';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { CampaignMembership } from '../_models/campaign-membership';

interface PasswordModel {
  password: string;
  oldPassword: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges {
  @Input() user!: User;
  @Input() memberships!: CampaignMembership[];
  @Input() canDeleteProfile: boolean = false;
  @Input() showProfileEditForm: boolean = false;
  @Input() showPasswordEditForm: boolean = false;
  @Input() campaignName?: string;
  
  @Output() profileUpdate: EventEmitter<Partial<User>> = new EventEmitter();
  @Output() passwordUpdate: EventEmitter<PasswordModel> = new EventEmitter(); 
  @Output() campaignLeave: EventEmitter<CampaignMembership> = new EventEmitter();
  @Output() profileDelete: EventEmitter<User> = new EventEmitter();
  
  backUrl!: string;
  
  passwordModel: Partial<PasswordModel> = {};
  passwordFields: FormlyFieldConfig[] = [
    this.formlyService.buildSinglePasswordConfig({
      key: "oldPassword", 
      label: "Your old password"
    }),
    this.formlyService.buildConfirmedPasswordConfig({
      label: "New Password"
    }),
  ];

  profileModel: Partial<User> = {};
  profileFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "username",
      inputKind: 'STRING',
    }),
    this.formlyService.buildInputConfig({
      key: "email", 
      required: false,
      inputKind: 'STRING',
    }),
  ]
  
  constructor(
    private formlyService: FormlyService,
    private routingService: RoutingService,
  ){}
  
  ngOnChanges(): void {
    this.setBackUrl();
  }
  
  toggleProfileEditState(): void{
    this.showProfileEditForm = !this.showProfileEditForm;

    if(this.showProfileEditForm){
      this.profileModel = {username: this.user.username, email: this.user.email};
    }
  }

  togglePasswordEditState(): void{
    this.showPasswordEditForm = !this.showPasswordEditForm;

    if(this.showPasswordEditForm){
      this.passwordModel = {};
    }
  }
  
  updatePassword(): void{
    const hasNewPassword = !_.isNil(this.passwordModel.password);
    const hasOldPassword = !_.isNil(this.passwordModel.oldPassword);
    if(!hasNewPassword || !hasOldPassword){
      return;
    }

    this.passwordUpdate.emit(this.passwordModel as PasswordModel);
  }
  
  toggleLeaveCampaignState(membership: CampaignMembership): void{
    membership.isLeaving = !membership.isLeaving;
  }
  
  private setBackUrl(): void{
    const isCampaignProfileRoute = !_.isNil(this.campaignName);
    
    this.backUrl = isCampaignProfileRoute 
      ? this.routingService.getRoutePath('home1', {campaign: this.campaignName})
      : this.routingService.getRoutePath('campaign-overview');
  }
}
