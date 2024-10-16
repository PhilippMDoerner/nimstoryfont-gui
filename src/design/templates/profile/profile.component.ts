import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { CampaignMembership } from '../_models/campaign-membership';

export interface PasswordModel {
  password: string;
  oldPassword: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() user!: User;
  @Input() memberships!: CampaignMembership[];
  @Input() canDeleteProfile: boolean = false;
  @Input() showProfileEditForm: boolean = false;
  @Input() showPasswordEditForm: boolean = false;
  @Input() campaignName?: string;
  backUrl = input.required<string>();

  @Output() profileUpdate: EventEmitter<Partial<User>> = new EventEmitter();
  @Output() passwordUpdate: EventEmitter<PasswordModel> = new EventEmitter();
  @Output() campaignLeave: EventEmitter<CampaignMembership> =
    new EventEmitter();
  @Output() profileDelete: EventEmitter<User> = new EventEmitter();

  passwordModel: Partial<PasswordModel> = {};
  passwordFields: FormlyFieldConfig[] = [
    this.formlyService.buildSinglePasswordConfig({
      key: 'oldPassword',
      label: 'Your old password',
    }),
    this.formlyService.buildConfirmedPasswordConfig({
      label: 'New Password',
    }),
  ];

  profileModel: Partial<User> = {};
  profileFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'username',
      inputKind: 'STRING',
    }),
    this.formlyService.buildInputConfig({
      key: 'email',
      required: false,
      inputKind: 'STRING',
    }),
  ];

  constructor(private formlyService: FormlyService) {}

  toggleProfileEditState(): void {
    this.showProfileEditForm = !this.showProfileEditForm;

    if (this.showProfileEditForm) {
      this.profileModel = {
        username: this.user.username,
        email: this.user.email,
      };
    }
  }

  submitProfileUpdate(): void {
    this.profileUpdate.emit(this.profileModel);
    this.showProfileEditForm = false;
  }

  togglePasswordEditState(): void {
    this.showPasswordEditForm = !this.showPasswordEditForm;

    if (this.showPasswordEditForm) {
      this.passwordModel = {};
    }
  }

  updatePassword(): void {
    const hasNewPassword = this.passwordModel.password != null;
    const hasOldPassword = this.passwordModel.oldPassword != null;
    if (!hasNewPassword || !hasOldPassword) {
      return;
    }

    this.passwordUpdate.emit(this.passwordModel as PasswordModel);
    this.showPasswordEditForm = false;
  }

  toggleLeaveCampaignState(membership: CampaignMembership): void {
    membership.isLeaving = !membership.isLeaving;
  }
}
