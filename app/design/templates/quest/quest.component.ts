import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Quest } from 'src/app/_models/quest';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.scss']
})
export class QuestComponent implements OnInit, OnChanges {
  @Input() quest!: Quest;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() questDelete: EventEmitter<Quest> = new EventEmitter();
  
  questGiverUrl!: string;
  overviewUrl!: string;
  updateUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.quest.campaign_details?.name;
    this.overviewUrl = this.routingService.getRoutePath(
      'quest-overview',
      {campaign: campaignName}
    );
    
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  private setUrls(): void{
    const campaignName = this.quest.campaign_details?.name;
    this.questGiverUrl = this.routingService.getRoutePath(
      'character',
      {
        campaign: campaignName,
        name: this.quest.giver_details?.name,
      }
    );
    
    this.updateUrl = this.routingService.getRoutePath(
      'quest-update',
      {
        campaign: campaignName,
        name: this.quest.name,
      }
    );
  }
}
