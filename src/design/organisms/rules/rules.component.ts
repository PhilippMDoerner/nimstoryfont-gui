import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import { Rule } from 'src/app/_models/rule';

interface RuleCard{
  rule: Rule,
  isOpen: boolean,
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit, OnChanges{
  DEFAULT_TITLE = "New Article Item";

  @Input() rules!: Rule[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Rule;
  
  @Output() ruleDelete: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleUpdate: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleCreate: EventEmitter<Rule> = new EventEmitter();
  
  ruleCards!: RuleCard[];
  
  constructor(
    private elementRef: ElementRef
  ){}
  
  ngOnInit(): void {
    this.setRuleCards();
  }
  
  ngOnChanges(): void {
    this.setRuleCards();
  }
  
  onRuleDelete(ruleToDelete: Rule, deleteIndex: number){
    this.ruleDelete.emit(ruleToDelete);
    this.removeRule(deleteIndex);
  }
  
  removeRule(removalIndex: number){
    const panelElements: HTMLElement[] = this.elementRef.nativeElement.querySelectorAll('app-collapsible-panel');
    const panelElement: HTMLElement = panelElements[removalIndex];
    
    animateElement(panelElement, 'zoomOut')
      .then(() => {
        const entriesToDelete: number = 1;
        this.rules.splice(removalIndex, entriesToDelete);
        this.ngOnChanges();
      });
  }
  
  addRule(){
    const newRule: Rule = {name: this.DEFAULT_TITLE} as Rule;
    const newRuleCard: RuleCard = {rule: newRule, isOpen: true};
    this.ruleCards.unshift(newRuleCard);
  }
  
  private setRuleCards(){
    this.ruleCards = this.rules.map(
      rule => ({rule: rule, isOpen: false})
    );
  }
}
