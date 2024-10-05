import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter } from 'rxjs';
import { CharacterEncounter } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { LocationService } from 'src/app/_services/article/location.service';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry } from 'src/design/molecules';
import { Encounter, EncounterConnection } from '../../../app/_models/encounter';

type EncounterState = 'DISPLAY' | 'UPDATE' | 'OUTDATEDUPDATE' | 'CREATE';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit, OnChanges {
  @Input() encounter?: Encounter | CharacterEncounter;
  @Input() characters!: OverviewItem[];
  @Input() serverModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() initialState: EncounterState = 'DISPLAY';

  @Output() connectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter | CharacterEncounter> =
    new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreateCancel: EventEmitter<null> = new EventEmitter();

  userModel!: Encounter;
  state!: EncounterState;
  badgeEntries!: BadgeListEntry[];
  campaignName!: string;

  formlyFields!: FormlyFieldConfig[];

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    const isInCreateScenario = this.initialState === 'CREATE' && this.canCreate;
    const model = isInCreateScenario ? ({} as Encounter) : undefined;
    this.changeState(this.initialState, model);

    if (this.encounter) {
      this.campaignName = this.encounter.campaign_details?.name as string;
      this.setBadgeEntries();
      this.setFormlyFields();
    }
  }

  ngOnChanges(): void {
    this.setBadgeEntries();
  }

  setBadgeEntries() {
    const encounterConnections = this.encounter?.encounterConnections ?? [];
    this.badgeEntries = this.parseConnection(encounterConnections);
  }

  setFormlyFields() {
    this.formlyFields = [
      this.formlyService.buildInputConfig({
        key: 'title',
        inputKind: 'STRING',
      }),
      this.formlyService.buildOverviewSelectConfig({
        key: 'location',
        label: 'Encounter Location',
        sortProp: 'name_full',
        campaign: this.campaignName,
        options$: this.locationService.campaignList.data.pipe(
          filter((x) => !!x)
        ),
        labelProp: 'name',
      }),
      this.formlyService.buildEditorConfig({
        key: 'description',
        required: true,
      }),
    ];
  }

  changeState(newState: EncounterState, newModel: Encounter | undefined) {
    this.state = newState;
    this.userModel = { ...newModel } as Encounter;
  }

  onEncounterCreate(encounter: Encounter) {
    this.encounterCreate.emit(encounter);
    this.encounter = encounter;
    this.changeState('DISPLAY', encounter);
  }

  onEncounterDelete() {
    this.encounterDelete.emit(this.encounter);
    this.changeState('DISPLAY', undefined);
  }

  onEncounterUpdate(encounter: Encounter) {
    this.encounterUpdate.emit(encounter);
    this.encounter = encounter;
    this.changeState('DISPLAY', undefined);
  }

  onEncounterCreateCancel() {
    this.encounterCreateCancel.emit();
    this.changeState('DISPLAY', undefined);
  }

  onConnectionDelete(connection: EncounterConnection) {
    if (!this.canDelete) {
      return;
    }

    this.connectionDelete.emit(connection);
  }

  onConnectionCreate(character: OverviewItem) {
    const newConnection: EncounterConnection = {
      encounter: this.encounter?.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  onToggle(toggled: boolean) {
    const isCancellingCreation = this.state === 'CREATE';
    if (isCancellingCreation) {
      this.encounterCreateCancel.emit();
      return;
    }

    const isInDisplayState = this.state === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Encounter | undefined = toggled
      ? ({ ...this.encounter } as Encounter)
      : undefined;
    this.changeState(nextState, nextModel);
  }

  private parseConnection(
    connections: EncounterConnection[]
  ): BadgeListEntry[] {
    return connections.map((con) => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath('character', {
        name: characterName,
        campaign: this.campaignName,
      });

      return {
        text: characterName,
        badgeValue: con,
        link,
      };
    });
  }
}
