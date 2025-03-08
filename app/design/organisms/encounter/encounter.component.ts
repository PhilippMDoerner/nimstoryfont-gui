import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  EventEmitter,
  inject,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { interval, of, take } from 'rxjs';
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
import {
  EditorComponent,
  TextFieldState,
} from '../../molecules/editor/editor.component';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    EditToggleComponent,
    SeparatorComponent,
    BadgeListComponent,
    ConfirmationToggleButtonComponent,
    FormComponent,
    CompareFormComponent,
    NgbTooltipModule,
    EditorComponent,
    HotkeyDirective,
  ],
})
export class EncounterComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  characters = input.required<OverviewItem[]>();
  locations = input.required<OverviewItem[]>();
  encounter = input<Encounter | CharacterEncounter>();
  serverModel = input<Encounter>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  initialCardState = input<FormState>('DISPLAY');
  isInFocus = input.required<boolean>();

  component = inject(ElementRef);

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
  cardState = signal<FormState>('DISPLAY');
  textFieldState = signal<TextFieldState>('DISPLAY');
  badgeEntries = computed<BadgeListEntry<EncounterConnection>[]>(() => {
    const encounterConnections = this.encounter()?.encounterConnections ?? [];
    return this.parseConnection(encounterConnections);
  });
  campaignName = computed(() => this.encounter()?.campaign_details?.name);

  locations$ = toObservable(this.locations).pipe(filterNil());
  formlyFields = computed<FormlyFieldConfig[]>(() => {
    const editorField: FormlyFieldConfig = this.formlyService.buildEditorConfig(
      {
        key: 'description',
        required: true,
      },
    );
    const defaultFields = [
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
    ];

    return this.cardState() === 'CREATE'
      ? [...defaultFields, editorField]
      : defaultFields;
  });

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ) {}

  ngOnInit(): void {
    const isInCreateScenario =
      this.initialCardState() === 'CREATE' && this.canCreate();
    const model = isInCreateScenario ? {} : undefined;
    this.changeState(this.initialCardState(), model);
  }

  changeState(newState: FormState, newModel: Partial<Encounter> | undefined) {
    this.cardState.set(newState);
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

  onDescriptionUpdate(newDescription: string) {
    const updatedEncounter: Encounter = {
      ...(this.encounter() as Encounter),
      description: newDescription,
    };
    this.encounterUpdate.emit(updatedEncounter);
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
    const isCancellingCreation = this.cardState() === 'CREATE';
    if (isCancellingCreation) {
      this.encounterCreateCancel.emit();
      return;
    }

    const isInDisplayState = this.cardState() === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Encounter | undefined = toggled
      ? ({ ...this.encounter() } as Encounter)
      : undefined;
    this.changeState(nextState, nextModel);
    this.scrollComponentIntoView();
  }

  toggleTextField() {
    switch (this.textFieldState()) {
      case 'DISPLAY':
        this.toUpdateState();
        break;
      case 'UPDATE':
        this.toDisplayState();
        break;
      default:
        break;
    }

    this.scrollComponentIntoView();
  }

  toDisplayState() {
    this.textFieldState.set('DISPLAY');
  }

  toUpdateState() {
    this.textFieldState.set('UPDATE');
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
    const undesiredCharRegex = /[\-\s']/g;
    return str?.replaceAll(undesiredCharRegex, '') ?? '';
  }

  private scrollComponentIntoView() {
    interval(100)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(() =>
        this.component?.nativeElement.scrollIntoView({
          behavior: 'instant',
          block: 'start',
        }),
      );
  }
}
