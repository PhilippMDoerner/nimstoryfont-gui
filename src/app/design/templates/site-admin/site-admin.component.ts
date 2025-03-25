import { KeyValuePipe, TitleCasePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PermissionGroup } from 'src/app/_models/auth';
import {
  BaseCampaignData,
  Campaign,
  WikiStatistics,
} from 'src/app/_models/campaign';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { CardComponent } from '../../atoms/card/card.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SeparatorComponent } from '../../atoms/separator/separator.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';
import { CollapsiblePanelComponent } from '../../molecules/collapsible-panel/collapsible-panel.component';
import { FormComponent } from '../../molecules/form/form.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { UserRowComponent } from '../../organisms/user-row/user-row.component';

type UserState = 'CREATE' | 'DISPLAY';
type CampaignState = 'CREATE' | 'WAIT_WHILE_CREATING' | 'DISPLAY';

@Component({
  selector: 'app-site-admin',
  templateUrl: './site-admin.component.html',
  styleUrls: ['./site-admin.component.scss'],
  imports: [
    PageContainerComponent,
    RouterLink,
    ButtonComponent,
    IconComponent,
    SeparatorComponent,
    CardComponent,
    ButtonLinkComponent,
    FormComponent,
    CollapsiblePanelComponent,
    UserRowComponent,
    SpinnerComponent,
    TitleCasePipe,
    KeyValuePipe,
  ],
})
export class SiteAdminComponent implements OnInit, OnChanges {
  @Input() users?: User[];
  @Input() campaigns?: Campaign[];
  @Input() allGroups?: PermissionGroup[];
  @Input() statistics?: WikiStatistics;
  @Input() serverUrl!: string;

  readonly createCampaign = output<BaseCampaignData>();
  readonly createUser = output<User>();
  readonly addUserGroup = output<{ user: User; groupId: number }>();
  readonly removeUserGroup = output<{ user: User; groupId: number }>();
  readonly downloadDatabase = output<void>();
  readonly deleteUser = output<User>();

  campaignOverviewUrl!: string;

  userCards!: { isOpen: boolean; user: User }[];
  userState: UserState = 'DISPLAY';
  userModel!: Partial<User>;
  userFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'username',
      inputKind: 'NAME',
      required: true,
    }),
    this.formlyService.buildConfirmedPasswordConfig({}),
    this.formlyService.buildInputConfig({
      key: 'email',
      inputKind: 'NAME',
      required: false,
    }),
  ];

  campaignState: CampaignState = 'DISPLAY';
  campaignModel!: Partial<BaseCampaignData>;
  campaignFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
      required: true,
      maxLength: 40,
      placeholder: "Your campaign's name...",
    }),
    this.formlyService.buildInputConfig({
      key: 'subtitle',
      inputKind: 'STRING',
      required: false,
      maxLength: 400,
      placeholder: 'The subtitle to show on the home page',
    }),
    this.formlyService.buildFileFieldConfig({
      key: 'background_image',
      required: true,
      fileButtonType: 'DARK',
    }),
    this.formlyService.buildFileFieldConfig({
      key: 'icon',
      required: true,
      fileButtonType: 'DARK',
    }),
  ];

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ) {}

  ngOnInit(): void {
    this.setCampaignOverviewUrl();
  }

  ngOnChanges(): void {
    this.setUserCards();
  }

  setUserState(newState: UserState): void {
    this.userState = newState;

    if (this.userState === 'CREATE') {
      this.userModel = {};
    }
  }

  createNewUser(newUser: Partial<User>): void {
    this.createUser.emit(newUser as User);
  }

  setCampaignState(newState: CampaignState): void {
    this.campaignState = newState;

    if (this.campaignState === 'CREATE') {
      this.campaignModel = {};
    }
  }

  createNewCampaign(newCampaign: Partial<BaseCampaignData>): void {
    this.createCampaign.emit(newCampaign as BaseCampaignData);
  }

  private setUserCards(): void {
    this.userCards =
      this.users
        ?.map((user) => ({ isOpen: false, user }))
        ?.sort((entry1, entry2) =>
          entry1.user.username.toLowerCase() >
          entry2.user.username.toLowerCase()
            ? 1
            : -1,
        ) ?? [];
  }

  private setCampaignOverviewUrl(): void {
    this.campaignOverviewUrl =
      this.routingService.getRoutePath('campaign-overview');
  }
}
