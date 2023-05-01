import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import { Spell } from 'src/app/_models/spell';

interface SpellCard{
  spell: Spell,
  isOpen: boolean,
}

@Component({
  selector: 'app-spells.component',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent {  
  DEFAULT_TITLE = "New Article Item";

  @Input() spells!: Spell[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Spell;
  
  @Output() spellDelete: EventEmitter<Spell> = new EventEmitter();
  @Output() spellUpdate: EventEmitter<Spell> = new EventEmitter();
  @Output() spellCreate: EventEmitter<Spell> = new EventEmitter();
  
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
    const newSpellCard: SpellCard = {spell: newSpell, isOpen: true};
    this.spellCards.unshift(newSpellCard);
  }
  
  private setSpellCards(){
    this.spellCards = this.spells.map(
      spell => ({spell: spell, isOpen: false})
    );
  }
  
  
}
