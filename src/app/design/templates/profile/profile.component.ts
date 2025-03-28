import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, input, Input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { AlertComponent } from '../../atoms/alert/alert.component';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CardComponent } from '../../atoms/card/card.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SeparatorComponent } from '../../atoms/separator/separator.component';
import { ConfirmationToggleButtonComponent } from '../../molecules/confirmation-toggle-button/confirmation-toggle-button.component';
import { FormComponent } from '../../molecules/form/form.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { CampaignMembership } from '../_models/campaign-membership';

export interface PasswordModel {
  password: string;
  oldPassword: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    PageContainerComponent,
    IconComponent,
    ButtonComponent,
    SeparatorComponent,
    NgTemplateOutlet,
    ButtonLinkComponent,
    CardComponent,
    FormComponent,
    RouterLink,
    ConfirmationToggleButtonComponent,
    AlertComponent,
    TitleCasePipe,
  ],
})
export class ProfileComponent {
  @Input() user!: User;
  @Input() memberships!: CampaignMembership[];
  @Input() canDeleteProfile = false;
  @Input() showProfileEditForm = false;
  @Input() showPasswordEditForm = false;
  @Input() campaignName?: string;
  backUrl = input.required<string>();

  readonly profileUpdate = output<Partial<User>>();
  readonly passwordUpdate = output<PasswordModel>();
  readonly campaignLeave = output<CampaignMembership>();
  readonly profileDelete = output<User>();

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
