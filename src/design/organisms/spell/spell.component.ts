import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { PlayerClass } from 'src/app/_models/playerclass';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { BadgeListEntry } from 'src/design/molecules';
import {
  SPELL_CASTING_TIME,
  SPELL_COMPONENTS,
  SPELL_DURATION,
  SPELL_LEVELS,
  SPELL_RANGES,
  SPELL_SAVES,
  SPELL_SCHOOLS,
  Spell,
  SpellPlayerClassConnection,
} from '../../../app/_models/spell';
import { ElementType } from '../../atoms';

type SpellState = 'DISPLAY' | 'CREATE' | 'UPDATE' | 'OUTDATED_UPDATE';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.scss'],
})
export class SpellComponent implements OnInit, OnChanges {
  @Input() spell?: Spell;
  @Input() playerClasses!: PlayerClass[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Spell;
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() submitButtonType: ElementType = 'PRIMARY';

  @Output() spellDelete: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellUpdate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreateCancel: EventEmitter<null> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<SpellPlayerClassConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<SpellPlayerClassConnection> =
    new EventEmitter();

  userModel?: Spell;
  state: SpellState = 'DISPLAY';
  playerClassConnections!: BadgeListEntry<SpellPlayerClassConnection>[];

  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildCheckboxConfig({
      key: 'concentration',
      label: 'Concentration',
      defaultValue: false,
    }),
    this.formlyService.buildCheckboxConfig({
      key: 'ritual',
      defaultValue: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'spell_level',
      label: 'Spell Level',
      options: SPELL_LEVELS,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'casting_time',
      label: 'Casting Time',
      options: SPELL_CASTING_TIME,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'duration',
      options: SPELL_DURATION,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'range',
      options: SPELL_RANGES,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'components',
      options: SPELL_COMPONENTS,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'school',
      options: SPELL_SCHOOLS,
    }),
    this.formlyService.buildStaticSelectConfig({
      key: 'saving_throw',
      label: 'Saving Throw',
      options: SPELL_SAVES,
      required: false,
    }),
    this.formlyService.buildInputConfig({
      key: 'damage',
      label: 'Effect',
      maxLength: 40,
      required: false,
      inputKind: 'STRING',
    }),
    this.formlyService.buildEditorConfig({ key: 'description' }),
  ];

  constructor(private formlyService: FormlyService) {}

  ngOnInit(): void {
    const isInCreateScenario = this.spell?.pk == null && this.canCreate;
    if (isInCreateScenario) {
      this.changeState('CREATE', {} as Spell);
    }

    this.setPlayerClassConnections();
  }

  ngOnChanges(): void {
    this.setPlayerClassConnections();
  }

  setPlayerClassConnections(): void {
    const classConnections: SpellPlayerClassConnection[] =
      this.spell?.player_class_connections ?? [];
    this.playerClassConnections = classConnections.map((con) => {
      return {
        badgeValue: con,
        text: con.player_class_details?.name as string,
        link: undefined as any as string,
      };
    });
  }

  onToggle(toggled: boolean) {
    const isInCreateScenario = this.state === 'CREATE';
    if (isInCreateScenario) {
      this.onSpellCreateCancel();
      return;
    }

    const isInDisplayState = this.state === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Spell | undefined = toggled
      ? ({ ...this.spell } as Spell)
      : undefined;
    this.changeState(nextState, nextModel);
  }

  changeState(newState: SpellState, newModel: Spell | undefined) {
    this.state = newState;
    this.userModel = { ...newModel } as Spell;
  }

  onSpellCreate(spell?: Spell) {
    this.spellCreate.emit(spell as Spell);
    this.spell = spell;
    this.changeState('DISPLAY', undefined);
  }

  onSpellDelete() {
    this.spellDelete.emit(this.spell);
  }

  onSpellUpdate(spell?: Spell) {
    this.spellUpdate.emit(spell as Spell);
    this.spell = spell;
    this.changeState('DISPLAY', undefined);
  }

  onConnectionCreate(selectedClass: PlayerClass) {
    const connection: SpellPlayerClassConnection = {
      spell: this.spell?.pk as number,
      player_class: selectedClass.pk as number,
    };
    this.connectionCreate.emit(connection);
  }

  onSpellCreateCancel() {
    this.changeState('DISPLAY', undefined);
    this.spellCreateCancel.emit();
  }
}
