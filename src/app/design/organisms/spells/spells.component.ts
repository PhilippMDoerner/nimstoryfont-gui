import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import { Spell, SpellPlayerClassConnection } from 'src/app/_models/spell';
import { BadgeListEntry } from 'src/app/design/molecules';

interface SpellCard{
  spell: Spell,
  isOpen: boolean,
  classes: BadgeListEntry[],
}

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit, OnChanges{  
  DEFAULT_TITLE = "New Article Item";

  @Input() spells!: Spell[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Spell;
  
  @Output() spellDelete: EventEmitter<Spell> = new EventEmitter();
  @Output() spellUpdate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreate: EventEmitter<Spell> = new EventEmitter();
  @Output() connectionDelete: EventEmitter<SpellPlayerClassConnection> = new EventEmitter();
  @Output() connectionCreate: EventEmitter<SpellPlayerClassConnection> = new EventEmitter();

  spellCards!: SpellCard[];
  
  constructor(
    private elementRef: ElementRef
  ){}
  
  ngOnInit(): void {
    this.setSpellCards();
  }
  
  ngOnChanges(): void {
    this.setSpellCards();
  }
  
  onSpellDelete(spellToDelete: Spell, deleteIndex: number){
    this.spellDelete.emit(spellToDelete);
    this.removeSpell(deleteIndex);
  }
  
  removeSpell(removalIndex: number){
    const panelElements: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('app-collapsible-panel');
    const panelElement: HTMLElement = panelElements[removalIndex];
    
    animateElement(panelElement, 'zoomOut')
      .then(() => {
        const entriesToDelete: number = 1;
        this.spells.splice(removalIndex, entriesToDelete);
        this.ngOnChanges();
      });
  }
  
  addSpell(){
    const newSpell: Spell = {name: this.DEFAULT_TITLE} as Spell;
    const newSpellCard: SpellCard = {spell: newSpell, isOpen: true, classes: []};
    this.spellCards.unshift(newSpellCard);
  }
  
  private setSpellCards(){
    this.spellCards = this.spells.map(
      spell => ({
        spell: spell, 
        isOpen: false,
        classes: this.parsePlayerClasses(spell.player_class_connections)
      }),
    );
  }
  
  private parsePlayerClasses(classes: SpellPlayerClassConnection[]): BadgeListEntry[]{
    return classes.map(entry => ({
      text: entry.player_class_details?.name as string,
      badgeValue: undefined,
    }));
  }
  
}
