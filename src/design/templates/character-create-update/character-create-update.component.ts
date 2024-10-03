import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, of } from 'rxjs';
import {
  CharacterDetails,
  CharacterOrganization,
  OrganizationMembership,
} from 'src/app/_models/character';
import { Organization } from 'src/app/_models/organization';
import { OverviewItem } from 'src/app/_models/overview';
import { PlayerClass } from 'src/app/_models/playerclass';
import { LocationService } from 'src/app/_services/article/location.service';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { BadgeListEntry } from '../../molecules';
import { CreateUpdateState } from '../_models/create-update-states';

type MembershipFormState = 'CREATE' | 'DISPLAY';

@Component({
  selector: 'app-character-create-update',
  templateUrl: './character-create-update.component.html',
  styleUrls: ['./character-create-update.component.scss'],
})
export class CharacterCreateUpdateComponent implements OnInit, OnChanges {
  @Input() state!: CreateUpdateState;
  @Input() campaignName!: string;
  @Input() userModel: Partial<CharacterDetails> = {};
  @Input() serverModel!: CharacterDetails;
  @Input() classOptions!: PlayerClass[];
  @Input() organizations!: OverviewItem[];

  @Output() create: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() update: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() addClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() removeClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() addOrganizationMembership: EventEmitter<OrganizationMembership> =
    new EventEmitter();
  @Output() removeOrganizationMembership: EventEmitter<OrganizationMembership> =
    new EventEmitter();

  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildCheckboxConfig({
      key: 'player_character',
      label: 'Player Character',
      defaultValue: false,
    }),
    this.formlyService.buildCheckboxConfig({
      key: 'alive',
      defaultValue: true,
    }),
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
    }),
    this.formlyService.buildInputConfig({
      key: 'title',
      required: false,
      inputKind: 'STRING',
    }),
    this.formlyService.buildStaticStringSelectConfig({
      key: 'gender',
      label: 'Sex',
      options: ['Other', 'Female', 'Male'],
    }),
    this.formlyService.buildInputConfig({
      key: 'race',
      inputKind: 'STRING',
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'current_location',
      sortProp: 'name_full',
      labelProp: 'name_full',
      label: 'Location',
      overviewType: 'LOCATION',
      campaign: this.campaignName,
      required: false,
      options$: inject(LocationService)
        .campaignList.data.asObservable()
        .pipe(filter((list) => list != null)),
    }),
    this.formlyService.buildEditorConfig({
      key: 'description',
    }),
  ];

  organizationModel: Partial<OrganizationMembership> = {};
  organizationFormlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'role',
      inputKind: 'STRING',
      required: false,
    }),
    this.formlyService.buildDisableSelectConfig({
      key: 'organization_id',
      sortProp: 'name_full',
      label: 'Organization',
      labelProp: 'name_full',
      overviewType: 'ORGANIZATION',
      campaign: this.campaignName,
      disabledExpression: (organization: Organization) =>
        this.hasMembership(organization) ? true : null,
      tooltipMessage: 'The organization or group this character is a member of',
      warningMessage: '',
      options$: of(this.organizations),
    }),
  ];

  heading!: string;
  characterClasses!: BadgeListEntry[];
  characterOrganizations!: BadgeListEntry[];
  membershipFormState: MembershipFormState = 'DISPLAY';

  constructor(private formlyService: FormlyService) {}

  ngOnInit(): void {
    this.setHeading();
    this.setCharacterClasses();
    this.setCharacterOrganizations();
  }

  ngOnChanges(): void {
    this.setHeading();
    this.setCharacterClasses();
    this.setCharacterOrganizations();
  }

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(submittedData: Partial<CharacterDetails>): void {
    switch (this.state) {
      case 'CREATE':
        this.create.emit(submittedData as CharacterDetails);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as CharacterDetails);
        break;
    }
  }

  createMembership(event: any): void {
    const membership: OrganizationMembership = {
      ...event,
      organization_id: parseInt(event.organization_id),
      member_id: this.userModel.pk,
    };
    this.addOrganizationMembership.emit(membership);
  }

  setMembershipFormState(newState: MembershipFormState): void {
    this.membershipFormState = newState;
  }

  private setCharacterClasses(): void {
    this.characterClasses =
      this.userModel.player_class_connections?.map((connection) => ({
        text: connection.player_class_details?.name ?? '',
        badgeValue: connection.player_class_details as PlayerClass,
      })) ?? [];
  }

  private setCharacterOrganizations(): void {
    this.characterOrganizations =
      this.userModel.organizations?.map((membership) => ({
        text: `${membership.name} - ${membership.role}`,
        badgeValue: membership,
      })) ?? [];
  }

  private setHeading(): void {
    switch (this.state) {
      case 'CREATE':
        this.heading = 'Creating New Character';
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.heading = `Updating Character ${this.userModel.name}`;
    }
  }

  private hasMembership(organization: Organization): boolean {
    return (
      this.userModel.organizations?.some(
        (membership: CharacterOrganization) =>
          membership.organization_id === organization.pk,
      ) ?? false
    );
  }
}
