import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { PlayerClass } from 'src/app/_models/playerclass';
import { Spell, SpellPlayerClassConnection } from 'src/app/_models/spell';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-spells-template',
  templateUrl: './spells-template.component.html',
  styleUrls: ['./spells-template.component.scss']
})
export class SpellsTemplateComponent implements OnInit, OnChanges{
  @Input() campaignName!: string;
  @Input() spells!: Spell[];
  @Input() playerClasses!: PlayerClass[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Spell;
  
  @Output() spellDelete: EventEmitter<Spell> = new EventEmitter();
  @Output() spellUpdate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreate: EventEmitter<Spell> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<SpellPlayerClassConnection> = new EventEmitter();
  @Output() connectionCreate: EventEmitter<SpellPlayerClassConnection> = new EventEmitter();
  
  homeUrl!: string;
  filteredSpells!: Spell[];
  selectedClassNames: Set<string> = new Set();
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.homeUrl = this.routingService.getRoutePath(
      'home',
      {campaign: this.campaignName}
    );
    
    this.setFilteredSpells();
  }
  
  ngOnChanges(): void {
    this.setFilteredSpells();
  }
  
  onClassAdd(playerClass: PlayerClass): void{    
    this.selectedClassNames.add(playerClass.name);
    this.setFilteredSpells();
  }
  
  onClassRemove(className: string): void{
    this.selectedClassNames.delete(className);
    this.setFilteredSpells();
  }
  
  private setFilteredSpells(){
    const hasSelectedClasses = this.selectedClassNames.size > 0;
    if(!hasSelectedClasses){
      this.filteredSpells = this.spells;
      return;
    }
    
    this.filteredSpells = this.spells.filter(
      spell => {
        const classNames = spell.player_class_connections.map(con => con.player_class_details?.name);
        return classNames.some(name => this.selectedClassNames.has(name ?? ''))
      }
    );
  }
}
