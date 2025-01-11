import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs';
import { Rule, RuleRaw } from 'src/app/_models/rule';
import {
  slideOutFromBottom,
  slideUpFromBottom,
} from 'src/design/animations/slideDown';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { CollapsiblePanelComponent } from 'src/design/molecules';
import { filterNil } from 'src/utils/rxjs-operators';
import { RuleComponent } from '../rule/rule.component';

interface RuleCard {
  rule: Rule;
  isOpen: boolean;
}

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.scss'],
    animations: [slideOutFromBottom, slideUpFromBottom],
    imports: [
        ButtonComponent,
        CollapsiblePanelComponent,
        RuleComponent,
        SpinnerComponent,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
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

  ruleElements = viewChildren<ElementRef<HTMLDivElement>>('rule');
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

  constructor() {
    const ruleNameParam = inject(ActivatedRoute).snapshot.params['name'];
    if (ruleNameParam) {
      this.scrollToRule(ruleNameParam);
    }
  }

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

  private scrollToRule(ruleName: string): void {
    toObservable(this.ruleElements)
      .pipe(
        takeUntilDestroyed(),
        map((elements) =>
          elements.find((el) => el.nativeElement.id === ruleName),
        ),
        filterNil(),
        take(1),
      )
      .subscribe((ruleElement) => {
        const element = (ruleElement.nativeElement = ruleElement.nativeElement);
        element.scrollIntoView({ behavior: 'instant' });
      });
  }
}
