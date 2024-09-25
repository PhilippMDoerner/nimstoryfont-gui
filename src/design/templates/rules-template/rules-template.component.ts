import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rule } from 'src/app/_models/rule';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-rules-template',
  templateUrl: './rules-template.component.html',
  styleUrls: ['./rules-template.component.scss']
})
export class RulesTemplateComponent implements OnInit{
  @Input() campaignName!: string;
  @Input() rules!: Rule[];
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Rule;
  
  @Output() ruleDelete: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleUpdate: EventEmitter<Rule> = new EventEmitter();
  @Output() ruleCreate: EventEmitter<Rule> = new EventEmitter();
  
  homeUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.homeUrl = this.routingService.getRoutePath(
      'home',
      {campaign: this.campaignName}
    );
  }
}
