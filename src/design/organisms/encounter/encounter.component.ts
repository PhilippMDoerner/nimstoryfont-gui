import {
  Component,
  computed,
  EventEmitter,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CharacterEncounter } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry } from 'src/design/molecules';
import {
  Encounter,
  EncounterConnection,
  EncounterRaw,
} from '../../../app/_models/encounter';

type EncounterState = 'DISPLAY' | 'UPDATE' | 'OUTDATEDUPDATE' | 'CREATE';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
})
export class EncounterComponent implements OnInit {
  characters = input.required<OverviewItem[]>();
  locations = input.required<OverviewItem[]>();
  encounter = input<Encounter | CharacterEncounter>();
  serverModel = input<Encounter>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  initialState = input<EncounterState>('DISPLAY');

  @Output() connectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter | CharacterEncounter> =
    new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreate: EventEmitter<EncounterRaw> = new EventEmitter();
  @Output() encounterCreateCancel: EventEmitter<null> = new EventEmitter();

  userModel = signal<Encounter | Partial<EncounterRaw>>({});
  state = signal<EncounterState>('DISPLAY');
  badgeEntries = computed<BadgeListEntry<EncounterConnection>[]>(() => {
    const encounterConnections = this.encounter()?.encounterConnections ?? [];
    return this.parseConnection(encounterConnections);
  });
  campaignName = computed(() => this.encounter()?.campaign_details?.name);

  formlyFields = computed<FormlyFieldConfig[]>(() => [
    this.formlyService.buildInputConfig({
      key: 'title',
      inputKind: 'STRING',
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'location',
      label: 'Encounter Location',
      sortProp: 'name_full',
      campaign: this.campaignName(),
      options$: this.locations(),
      labelProp: 'name',
    }),
    this.formlyService.buildEditorConfig({
      key: 'description',
      required: true,
    }),
  ]);

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ) {}

  ngOnInit(): void {
    const isInCreateScenario =
      this.initialState() === 'CREATE' && this.canCreate();
    const model = isInCreateScenario ? {} : undefined;
    this.changeState(this.initialState(), model);
  }

  changeState(
    newState: EncounterState,
    newModel: Partial<Encounter> | undefined,
  ) {
    this.state.set(newState);
    this.userModel.set({ ...newModel });
  }

  onEncounterCreate(encounter: Partial<EncounterRaw> | Encounter) {
    this.encounterCreate.emit(encounter as EncounterRaw);
    this.changeState('DISPLAY', encounter);
  }

  onEncounterDelete() {
    this.encounterDelete.emit(this.encounter());
    this.changeState('DISPLAY', undefined);
  }

  onEncounterUpdate(encounter: Encounter | Partial<Encounter>) {
    this.encounterUpdate.emit(encounter as Encounter);
    this.changeState('DISPLAY', undefined);
  }

  onEncounterCreateCancel() {
    this.encounterCreateCancel.emit();
    this.changeState('DISPLAY', undefined);
  }

  onConnectionDelete(connection: EncounterConnection) {
    if (!this.canDelete()) {
      return;
    }

    this.connectionDelete.emit(connection);
  }

  onConnectionCreate(character: OverviewItem) {
    const newConnection: EncounterConnection = {
      encounter: this.encounter()?.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  onToggle(toggled: boolean) {
    const isCancellingCreation = this.state() === 'CREATE';
    if (isCancellingCreation) {
      this.encounterCreateCancel.emit();
      return;
    }

    const isInDisplayState = this.state() === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Encounter | undefined = toggled
      ? ({ ...this.encounter() } as Encounter)
      : undefined;
    this.changeState(nextState, nextModel);
  }

  private parseConnection(
    connections: EncounterConnection[],
  ): BadgeListEntry<EncounterConnection>[] {
    return connections.map((con) => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath('character', {
        name: characterName,
        campaign: this.campaignName(),
      });

      return {
        text: characterName,
        badgeValue: con,
        link,
      };
    });
  }
}
