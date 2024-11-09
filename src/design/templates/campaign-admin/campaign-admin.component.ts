import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnChanges,
  Output,
  Signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map, Observable } from 'rxjs';
import { Campaign, WikiStatistics } from 'src/app/_models/campaign';
import { EmptySearchResponse } from 'src/app/_models/emptySearchResponse';
import { CampaignRole } from 'src/app/_models/token';
import { User } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import {
  ButtonComponent,
  CardComponent,
  HtmlTextComponent,
  IconComponent,
  InfoCircleTooltipComponent,
} from 'src/design/atoms';
import {
  ArticleFooterComponent,
  ConfirmationToggleButtonComponent,
  FormComponent,
} from 'src/design/molecules';
import { PageContainerComponent } from 'src/design/organisms';

@Component({
  selector: 'app-campaign-admin',
  templateUrl: './campaign-admin.component.html',
  styleUrls: ['./campaign-admin.component.scss'],
  standalone: true,
  imports: [
    PageContainerComponent,
    ButtonComponent,
    RouterLink,
    KeyValuePipe,
    IconComponent,
    CardComponent,
    HtmlTextComponent,
    InfoCircleTooltipComponent,
    ConfirmationToggleButtonComponent,
    FormComponent,
    ArticleFooterComponent,
    NgTemplateOutlet,
  ],
})
export class CampaignAdminComponent implements OnChanges {
  @Input() campaign!: Campaign;
  @Input() serverUrl!: string;
  @Input() campaignStatistics!: WikiStatistics;
  users = input<User[]>();

  @Output() removeMember: EventEmitter<User> = new EventEmitter();
  @Output() removeAdmin: EventEmitter<User> = new EventEmitter();
  @Output() removeGuest: EventEmitter<User> = new EventEmitter();
  @Output() addMember: EventEmitter<User> = new EventEmitter();
  @Output() addAdmin: EventEmitter<User> = new EventEmitter();
  @Output() addGuest: EventEmitter<User> = new EventEmitter();
  @Output() removeEmptySearchResponse: EventEmitter<EmptySearchResponse> =
    new EventEmitter();
  @Output() addEmptySearchResponse: EventEmitter<EmptySearchResponse> =
    new EventEmitter();
  @Output() deactivateCampaign: EventEmitter<Campaign> = new EventEmitter();

  updateUrl!: string;
  homeUrl!: string;
  users$ = toObservable(this.users).pipe(map((x) => x ?? []));
  memberModel!: Partial<User>;
  showMemberAddForm: boolean = false;
  memberTooltip: string = `Allows creating, reading, updating and deleting articles in this campaign. Also makes the person a possible "author" for diaryentries.`;
  memberFormlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
    this.formlyService.buildDisableSelectConfig({
      key: 'pk',
      labelProp: 'username',
      sortProp: 'username',
      label: 'User',
      options$: this.users$,
      disabledExpression: (selectOptions$: Observable<User[]>) => {
        return selectOptions$.pipe(
          map((selectOptions) =>
            selectOptions.map((opt) =>
              this.isInGroup(opt, this.campaign.member_group_name),
            ),
          ),
        );
      },
      tooltipMessage:
        'Members typically represent the individual player characters + the GM(s)',
      warningMessage:
        'The user you selected is already member of this campaign',
    }),
  ]);

  adminModel!: Partial<User>;
  showAdminAddForm: boolean = false;
  adminTooltip: string = `Allows adding admins, members and guests to a campaign. Does not add the person to the list of possible "authors" for diaryentries.`;
  adminFormlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
    this.formlyService.buildDisableSelectConfig({
      key: 'pk',
      labelProp: 'username',
      sortProp: 'username',
      label: 'User',
      options$: this.users$,
      disabledExpression: (selectOptions$: Observable<User[]>) => {
        return selectOptions$.pipe(
          map((selectOptions) =>
            selectOptions.map((opt) =>
              this.isInGroup(opt, this.campaign.admin_group_name),
            ),
          ),
        );
      },
      tooltipMessage:
        'Keep in mind that being an admin only represents being the one administering this campaign, not being a member of it!',
      warningMessage: 'The user you selected is already admin of this campaign',
    }),
  ]);

  guestModel!: Partial<User>;
  showGuestAddForm: boolean = false;
  guestTooltip = `Allows only reading articles in this campaign.`;
  guestFormlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
    this.formlyService.buildDisableSelectConfig({
      key: 'pk',
      labelProp: 'username',
      sortProp: 'username',
      label: 'User',
      options$: this.users$,
      disabledExpression: (selectOptions$: Observable<User[]>) => {
        return selectOptions$.pipe(
          map((selectOptions) =>
            selectOptions.map((opt) => {
              const isAdmin = this.isInGroup(
                opt,
                this.campaign.admin_group_name,
              );
              const isMember = this.isInGroup(
                opt,
                this.campaign.member_group_name,
              );
              const isGuest = this.isInGroup(
                opt,
                this.campaign.guest_group_name,
              );
              return isAdmin || isMember || isGuest;
            }),
          ),
        );
      },

      tooltipMessage:
        "Keep in mind that there's no point in being a guest when you're already a member or admin.",
      warningMessage: 'The user you selected is already guest of this campaign',
    }),
  ]);

  responseModel!: Partial<EmptySearchResponse>;
  showResponseForm: boolean = false;
  responseFormlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'text',
      placeholder: 'Quest Name',
      maxLength: 400,
      inputKind: 'STRING',
    }),
  ];

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ) {}

  ngOnChanges(): void {
    this.setUrls();
  }

  changeState(role: CampaignRole, showForm: boolean): void {
    switch (role) {
      case 'member':
      case 'globalmember':
        this.showMemberAddForm = showForm;
        this.memberModel = {};
        break;
      case 'admin':
        this.showAdminAddForm = showForm;
        this.adminModel = {};
        break;
      case 'guest':
      case 'globalguest':
        this.showGuestAddForm = showForm;
        this.guestModel = {};
    }
  }

  onAddUser(role: CampaignRole, model: Partial<User>): void {
    switch (role) {
      case 'member':
      case 'globalmember':
        this.addMember.emit(model as User);
        break;
      case 'admin':
        this.addAdmin.emit(model as User);
        break;
      case 'guest':
      case 'globalguest':
        this.addGuest.emit(model as User);
        break;
    }

    this.changeState(role, false);
  }

  toggleResponseAddForm(): void {
    this.showResponseForm = !this.showResponseForm;

    if (this.showResponseForm) {
      this.responseModel = { campaign: this.campaign.pk as number };
    }
  }

  onAddResponse(model: Partial<EmptySearchResponse>): void {
    this.addEmptySearchResponse.emit(model as EmptySearchResponse);
    this.toggleResponseAddForm();
  }

  private setUrls(): void {
    this.updateUrl = this.routingService.getRoutePath('campaign-update', {
      campaign: this.campaign.name,
    });
    this.homeUrl = this.routingService.getRoutePath('home', {
      campaign: this.campaign.name,
    });
  }

  /**
   * @description Checks if a given user is already a member in the current campaign.
   * @returns boolean
   */
  private isInGroup(selectOption: User, groupName?: string): boolean {
    const groupsOfUser = selectOption.group_details;
    const isMember = groupsOfUser?.some(
      (group) => group.name.toLowerCase() === groupName,
    );
    return isMember ?? false;
  }
}
