import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { PlayerClass } from 'src/app/_models/playerclass';
import {
  Spell,
  SpellPlayerClassConnection,
  SpellRaw,
} from 'src/app/_models/spell';
import {
  slideOutFromBottom,
  slideUpFromBottom,
} from 'src/design/animations/slideDown';
import {
  BadgeComponent,
  ButtonComponent,
  SpinnerComponent,
} from 'src/design/atoms';
import {
  BadgeListEntry,
  CollapsiblePanelComponent,
} from 'src/design/molecules';
import { SpellComponent } from '../spell/spell.component';

interface SpellCard {
  spell: Spell;
  isOpen: boolean;
  classes: BadgeListEntry<undefined>[];
}

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
  animations: [slideUpFromBottom, slideOutFromBottom],
  standalone: true,
  imports: [
    ButtonComponent,
    CollapsiblePanelComponent,
    SpellComponent,
    BadgeComponent,
    SpinnerComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsComponent {
  DEFAULT_TITLE = 'New Article Item';
  campaignId = input.required<number>();
  spells = input.required<Spell[]>();
  playerClasses = input.required<PlayerClass[]>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();
  canCreate = input.required<boolean>();
  serverModel = input.required<Spell | undefined>();

  @Output() spellDelete: EventEmitter<Spell> = new EventEmitter();
  @Output() spellUpdate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreate: EventEmitter<SpellRaw> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<SpellPlayerClassConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<SpellPlayerClassConnection> =
    new EventEmitter();
  @Output() spellClassClick: EventEmitter<PlayerClass> = new EventEmitter();

  isCreatingSpell = signal(false);
  createSpellData = computed(
    () => ({ name: this.DEFAULT_TITLE, campaign: this.campaignId() }) as Spell,
  );

  spellCards = computed<SpellCard[]>(() => {
    const spells = this.spells().map((spell) => ({
      spell: spell,
      isOpen: false,
      classes: this.parsePlayerClasses(spell.player_class_connections),
    }));

    return spells;
  });

  onSpellDelete(spellToDelete: Spell, deleteIndex: number) {
    this.spellDelete.emit(spellToDelete);
  }

  cancelSpellCreation() {
    this.isCreatingSpell.set(false);
  }

  addSpell() {
    this.isCreatingSpell.set(true);
  }

  onSpellClassClick(event: MouseEvent, connection: SpellPlayerClassConnection) {
    event.preventDefault();
    this.spellClassClick.emit(connection.player_class_details);
  }

  onSpellCreate(spell: Partial<SpellRaw>) {
    this.spellCreate.emit(spell as SpellRaw);
    this.isCreatingSpell.set(false);
  }

  private parsePlayerClasses(
    classes: SpellPlayerClassConnection[],
  ): BadgeListEntry<undefined>[] {
    return classes.map((entry) => ({
      text: entry.player_class_details?.name as string,
      badgeValue: undefined,
    }));
  }
}
