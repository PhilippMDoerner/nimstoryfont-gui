import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { Rule, RuleRaw } from 'src/app/_models/rule';
import {
  slideOutFromBottom,
  slideUpFromBottom,
} from 'src/design/animations/slideDown';

interface RuleCard {
  rule: Rule;
  isOpen: boolean;
}

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
  animations: [slideOutFromBottom, slideUpFromBottom],
})
export class RulesComponent {
  DEFAULT_TITLE = 'New Rule';

  campaignId = input.required<number>();
  rules = input.required<Rule[]>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();
  canCreate = input.required<boolean>();
  serverModel = input.required<Rule | undefined>();

  @Output() ruleDelete: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleUpdate: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleCreate: EventEmitter<RuleRaw> = new EventEmitter();

  isCreatingRule = signal(false);
  createRuleData = computed(
    () =>
      ({
        name: this.DEFAULT_TITLE,
        campaign: this.campaignId(),
      }) as Rule,
  );

  ruleCards = computed<RuleCard[]>(() =>
    this.rules().map((rule) => ({ rule: rule, isOpen: false })),
  );

  onRuleDelete(ruleToDelete: Rule) {
    this.ruleDelete.emit(ruleToDelete);
  }

  onRuleCreate(rule: Partial<RuleRaw>) {
    this.ruleCreate.emit({ ...rule, campaign: this.campaignId() } as RuleRaw);
    this.isCreatingRule.set(false);
  }

  cancelRuleCreation() {
    this.isCreatingRule.set(false);
  }

  addRule() {
    this.isCreatingRule.set(true);
  }
}
