import {
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
import { RoutingService } from 'src/app/_services/routing.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { SpellsComponent } from '../../organisms/spells/spells.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
    selector: 'app-spells-template',
    templateUrl: './spells-template.component.html',
    styleUrls: ['./spells-template.component.scss'],
    standalone: true,
    imports: [
        PageContainerComponent,
        BadgeComponent,
        SpellsComponent,
        RouterLink,
        ButtonComponent,
    ],
})
export class SpellsTemplateComponent {
  campaignName = input.required<string>();
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

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.campaignName,
    }),
  );
  filteredSpells = computed<Spell[]>(() => {
    const hasSelectedClasses = this.selectedClassNames().size > 0;
    if (!hasSelectedClasses) {
      return this.spells();
    }

    return this.spells().filter((spell) => {
      const classNames = spell.player_class_connections.map(
        (con) => con.player_class_details?.name,
      );
      return classNames.some((name) =>
        this.selectedClassNames().has(name ?? ''),
      );
    });
  });

  selectedClassNames = signal(new Set<string>());

  constructor(private routingService: RoutingService) {}

  onClassAdd(playerClass: PlayerClass): void {
    const newSet = new Set(this.selectedClassNames());
    newSet.add(playerClass.name);
    this.selectedClassNames.set(newSet);
  }

  onClassRemove(className: string): void {
    const newSet = new Set(this.selectedClassNames());
    newSet.delete(className);
    this.selectedClassNames.set(newSet);
  }
}
