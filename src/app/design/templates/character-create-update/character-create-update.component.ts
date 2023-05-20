import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Character, CharacterOrganization } from 'src/app/_models/character';
import { Organization } from 'src/app/_models/organization';
import { OverviewItem } from 'src/app/_models/overview';
import { PlayerClass } from 'src/app/_models/playerclass';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { BadgeListEntry } from '../../molecules';
import { CreateUpdateState } from '../_models/create-update-states';

@Component({
  selector: 'app-character-create-update',
  templateUrl: './character-create-update.component.html',
  styleUrls: ['./character-create-update.component.scss']
})
export class CharacterCreateUpdateComponent implements OnInit, OnChanges{
  @Input() state!: CreateUpdateState;
  @Input() campaignName!: string;
  @Input() userModel: Partial<Character> = {};
  @Input() serverModel!: Character;
  @Input() classOptions!: PlayerClass[];
  @Input() organizations!: OverviewItem[];
  
  @Output() create: EventEmitter<Character> = new EventEmitter();
  @Output() update: EventEmitter<Character> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Output() addClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() removeClass: EventEmitter<PlayerClass> = new EventEmitter();
  @Output() addOrganizationMembership: EventEmitter<OverviewItem> = new EventEmitter();
  @Output() removeOrganizationMembership: EventEmitter<OverviewItem> = new EventEmitter();
  
  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildCheckboxConfig({
      key: "player_character", 
      label: "Player Character", 
      defaultValue: false
    }),
    this.formlyService.buildCheckboxConfig({
      key: "alive", 
      defaultValue: true
    }),
    this.formlyService.buildInputConfig({
      key: "name", 
      inputKind: 'NAME',
    }),
    this.formlyService.buildInputConfig({
      key: "title", 
      required: false,
      inputKind: 'STRING'
    }),
    this.formlyService.buildStaticStringSelectConfig({
      key:"gender", 
      label: "Sex", 
      options: ["Other", "Female", "Male"]
    }),
    this.formlyService.buildInputConfig({
      key: "race",
      inputKind: 'STRING',
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: "current_location", 
      sortProp: "name_full", 
      labelProp: "name_full",
      label: "Location", 
      overviewType: 'LOCATION', 
      campaign: this.campaignName, 
      required: false
    }),
    this.formlyService.buildEditorConfig({
      key: 'description'
    })
  ];

  organizationFormlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "role", 
      inputKind: 'STRING', 
      required: false
    }),
    this.formlyService.buildDisableSelectConfig({
      key: "organization_id", 
      sortProp: "name_full", 
      label: "Organization", 
      labelProp: 'name_full',
      overviewType: 'ORGANIZATION', 
      campaign: this.campaignName,
      disabledExpression: (organization: Organization) => this.hasMembership(organization) ? true : null,
      tooltipMessage: "The organization or group this character is a member of",
      warningMessage: '',
    })
  ];

  heading!: string;
  characterClasses!: BadgeListEntry[];
  characterOrganizations!: BadgeListEntry[];
  
  constructor(
    private formlyService: FormlyService,
  ){}
  
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
  
  onCancel(): void{
    this.cancel.emit();
  }
  
  onSubmit(submittedData: Partial<Character>): void{
    switch(this.state){
      case 'CREATE':
        this.create.emit(submittedData as Character);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as Character);
        break;
    }
  }
  
  private setCharacterClasses(): void{
    this.characterClasses = this.userModel.player_class_connections?.map(connection => ({
        text: connection.player_class_details?.name ?? '',
        badgeValue: connection.player_class_details as PlayerClass,
      })
    ) ?? [];
  }
  
  private setCharacterOrganizations(): void{
    this.characterOrganizations = this.userModel.organizations?.map(
      membership => ({
        text: `${membership.name} - ${membership.role}`,
        badgeValue: membership,
      }),
    ) ?? [];
  }
  
  private setHeading(): void{
    switch(this.state){
      case 'CREATE':
        this.heading = "Creating New Character";
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.heading = `Updating Character ${this.userModel.name}`;
    }
  }
  
  private hasMembership(organization: Organization): boolean{
    return this.userModel.organizations?.some(
      (membership: CharacterOrganization) => membership.organization_id === organization.pk
    ) ?? false;
  }
}
