import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyServiceService } from 'src/app/_services/formly/formly-service.service';
import { Rule } from '../_models/rule';

type RuleState = "DISPLAY" | "CREATE" | "UPDATE" | "OUTDATED_UPDATE"

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.scss']
})
export class RuleComponent   implements OnInit, OnChanges{
  @Input() rule?: Rule;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Rule;
  
  @Output() ruleDelete: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleCreate: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleUpdate: EventEmitter<Rule> = new EventEmitter();
  
  userModel?: Rule;
  state: RuleState = 'DISPLAY';

  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "name", 
      inputKind: 'NAME',
    }),
    this.formlyService.buildEditorConfig({
      key: "description",
    }),
  ];

  constructor(
    private formlyService: FormlyServiceService,
  ) {}
  
  ngOnInit(): void {
    const isInCreateScenario = this.rule == null && this.canCreate;
    if(isInCreateScenario){
      this.changeState('CREATE', {} as Rule);
    }
    
  }
  
  ngOnChanges(): void {
    
  }
  
  
  onToggle(toggled: boolean){
    const isInDisplayState = this.state === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Rule | undefined = toggled ? {...this.rule} as Rule : undefined;
    this.changeState(nextState, nextModel)
  }
  
  changeState(newState: RuleState, newModel: Rule | undefined){
    this.state = newState;
    this.userModel = { ...newModel } as Rule;
  }
  
  onRuleCreate(rule: Rule){
    this.ruleCreate.emit(rule);
    this.rule = rule;
    this.changeState('DISPLAY', undefined);
  }
  
  onRuleDelete(){
    this.ruleDelete.emit(this.rule);
  }
  
  onRuleUpdate(rule: Rule){
    this.ruleUpdate.emit(rule);
    this.rule = rule;
    this.changeState('DISPLAY', undefined);
  }
}
