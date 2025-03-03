import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { of } from 'rxjs';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { CharacterEncounter } from 'src/app/_models/character';
import {
  Encounter,
  EncounterConnection,
  EncounterConnectionRaw,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { FormState } from 'src/app/_models/form';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';
import {
  BadgeListComponent,
  BadgeListEntry,
  CompareFormComponent,
  ConfirmationToggleButtonComponent,
  EditToggleComponent,
  FormComponent,
} from 'src/app/design/molecules';
import { filterNil } from 'src/utils/rxjs-operators';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    EditToggleComponent,
    HtmlTextComponent,
    SeparatorComponent,
    BadgeListComponent,
    ConfirmationToggleButtonComponent,
    FormComponent,
    CompareFormComponent,
    NgbTooltipModule,
    HotkeyDirective,
  ],
})
export class EncounterComponent implements OnInit {
  characters = input.required<OverviewItem[]>();
  locations = input.required<OverviewItem[]>();
  encounter = input<Encounter | CharacterEncounter>();
  serverModel = input<Encounter>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  initialState = input<FormState>('DISPLAY');
  isInFocus = input.required<boolean>();

  @Output() connectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnectionRaw> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter | CharacterEncounter> =
    new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreate: EventEmitter<EncounterRaw> = new EventEmitter();
  @Output() encounterCreateCancel: EventEmitter<null> = new EventEmitter();

  userModel = signal<Encounter | Partial<EncounterRaw>>({});
  state = signal<FormState>('DISPLAY');
  badgeEntries = computed<BadgeListEntry<EncounterConnection>[]>(() => {
    const encounterConnections = this.encounter()?.encounterConnections ?? [];
    return this.parseConnection(encounterConnections);
  });
  campaignName = computed(() => this.encounter()?.campaign_details?.name);

  locations$ = toObservable(this.locations).pipe(filterNil());
  formlyFields = computed<FormlyFieldConfig[]>(() => [
    this.formlyService.buildInputConfig({
      key: 'title',
      inputKind: 'STRING',
    }),
    this.formlyService.buildTypeaheadConfig<EncounterRaw, OverviewItem>({
      key: 'location',
      label: 'Encounter Location',
      getOptions: () => this.locations$,
      initialOption$: of({
        name_full: this.encounter()?.location_details?.name_full,
        pk: this.encounter()?.location,
      }),
      formatSearchTerm: (searchTerm) => this.formatEntry(searchTerm),
      optionLabelProp: 'name_full',
      optionValueProp: 'pk',
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

  changeState(newState: FormState, newModel: Partial<Encounter> | undefined) {
    this.state.set(newState);
    this.userModel.set({ ...newModel });
  }

  onEncounterCreate(encounter: Partial<EncounterRaw> | Encounter) {
    this.encounterCreate.emit({
      ...this.encounter(),
      ...encounter,
    } as EncounterRaw);
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
    const newConnection: EncounterConnectionRaw = {
      campaign: this.encounter()?.campaign_details?.id as number,
      encounter: this.encounter()?.pk as number,
      character: character.pk as number,
    };
    this.connectionCreate.emit(newConnection);
  }

  onToggle(toggled: boolean) {
    console.log('onToggle: ', toggled);
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

  private formatEntry(str: string | undefined) {
    return str?.replaceAll(/[\-\s']/g, '') ?? '';
  }
}
