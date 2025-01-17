import {
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  Output,
} from '@angular/core';
import { Rule, RuleRaw } from 'src/app/_models/rule';
import { RoutingService } from 'src/app/_services/routing.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { RulesComponent } from '../../organisms/rules/rules.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
    selector: 'app-rules-template',
    templateUrl: './rules-template.component.html',
    styleUrls: ['./rules-template.component.scss'],
    imports: [
        PageContainerComponent,
        RulesComponent,
        RouterLink,
        ButtonComponent,
    ]
})
export class RulesTemplateComponent {
  campaignName = input.required<string>();
  campaignId = input.required<number>();
  rules = input.required<Rule[]>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();
  canCreate = input.required<boolean>();
  serverModel = input.required<Rule | undefined>();

  @Output() ruleDelete: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleUpdate: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleCreate: EventEmitter<RuleRaw> = new EventEmitter();

  routingService = inject(RoutingService);

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', { campaign: this.campaignName() }),
  );
}
