import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
  Signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  CharacterDetails,
  CharacterOrganizationMembership,
  OrganizationMembership,
} from 'src/app/_models/character';
import { Organization } from 'src/app/_models/organization';
import { OverviewItem } from 'src/app/_models/overview';
import {
  CharacterPlayerClassConnectionDetail,
  PlayerClass,
} from 'src/app/_models/playerclass';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { BadgeListEntry } from '../../molecules';
import { CreateUpdateState } from '../_models/create-update-states';

type MembershipFormState = 'CREATE' | 'DISPLAY';

@Component({
  selector: 'app-character-create-update',
  templateUrl: './character-create-update.component.html',
  styleUrls: ['./character-create-update.component.scss'],
})
export class CharacterCreateUpdateComponent {
  state = input.required<CreateUpdateState>();
  campaignName = input.required<string>();
  userModel = input<Partial<CharacterDetails>>({});
  serverModel = input.required<CharacterDetails | undefined>();
  classOptions = input.required<PlayerClass[]>();
  organizationOptions = input.required<OverviewItem[]>();
  lastVisitedPlaceOptions = input.required<OverviewItem[]>();

  @Output() create: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() update: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() addClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() removeClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() addOrganizationMembership: EventEmitter<OrganizationMembership> =
    new EventEmitter();
  @Output() removeOrganizationMembership: EventEmitter<OrganizationMembership> =
    new EventEmitter();

  lastVisitedPlaceOptions$ = toObservable(this.lastVisitedPlaceOptions);
  organizationOptions$ = toObservable(this.organizationOptions);
  formlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
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
      campaign: this.campaignName(),
      required: false,
      options$: this.lastVisitedPlaceOptions$,
    }),
    this.formlyService.buildEditorConfig({
      key: 'description',
    }),
  ]);

  organizationModel = signal<Partial<OrganizationMembership>>({});
  organizationFormlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
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
      campaign: this.campaignName(),
      disabledExpression: (organization: Organization) =>
        this.hasMembership(organization) ? true : null,
      tooltipMessage: 'The organization or group this character is a member of',
      warningMessage: '',
      options$: this.organizationOptions$,
    }),
  ]);

  heading = computed(() => this.getHeading(this.state()));
  characterClasses = computed<BadgeListEntry<PlayerClass>[]>(() => {
    return (
      this.userModel().player_class_connections?.map(this.toBadgeListEntry) ??
      []
    );
  });
  characterOrganizations = computed<
    BadgeListEntry<CharacterOrganizationMembership>[]
  >(() => {
    return (
      this.userModel().organizations?.map(this.toCharacterOrganization) ?? []
    );
  });
  membershipFormState = signal<MembershipFormState>('DISPLAY');

  constructor(private formlyService: FormlyService) {}

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(submittedData: Partial<CharacterDetails>): void {
    switch (this.state()) {
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
      member_id: this.userModel().pk,
    };
    this.addOrganizationMembership.emit(membership);
    this.membershipFormState.set('DISPLAY');
  }

  cancelCreatingMembership(): void {
    this.membershipFormState.set('DISPLAY');
    this.organizationModel.set({});
  }

  removeMembership(org: CharacterOrganizationMembership): void {
    const membership: OrganizationMembership = {
      pk: org.pk,
      role: org.role,
      organization_id: org.organization_id,
      member_id: this.userModel().pk as number,
    };
    this.removeOrganizationMembership.emit(membership);
  }

  private toBadgeListEntry(
    connection: CharacterPlayerClassConnectionDetail,
  ): BadgeListEntry<PlayerClass> {
    return {
      text: connection.player_class_details?.name ?? '',
      badgeValue: connection.player_class_details as PlayerClass,
    };
  }

  private toCharacterOrganization(
    membership: CharacterOrganizationMembership,
  ): BadgeListEntry<CharacterOrganizationMembership> {
    return {
      text: `${membership.name} - ${membership.role}`,
      badgeValue: membership,
    };
  }

  private getHeading(state: CreateUpdateState): string {
    switch (state) {
      case 'CREATE':
        return 'Creating New Character';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return `Updating Character ${this.userModel().name}`;
    }
  }

  private hasMembership(organization: Organization): boolean {
    return (
      this.userModel().organizations?.some(
        (membership: CharacterOrganizationMembership) =>
          membership.organization_id === organization.pk,
      ) ?? false
    );
  }
}
