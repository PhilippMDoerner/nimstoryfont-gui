import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Creature } from 'src/app/_models/creature';
import { Image } from 'src/app/_models/image';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss']
})
export class CreatureComponent implements OnInit, OnChanges{
  @Input() creature!: Creature;
  @Input() serverUrl!: string;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() imageServerModel?: Image;
  
  @Output() creatureDelete: EventEmitter<Creature> = new EventEmitter();
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  
  overviewUrl!: string;
  updateUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.creature.campaign_details?.name;
    this.overviewUrl = this.routingService.getRoutePath(
      'character-overview', 
      {campaign: campaignName}
    );
    
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  setUrls(): void{
    const campaignName = this.creature.campaign_details?.name;

    this.updateUrl = this.routingService.getRoutePath(
      'creature-update',
      {
        campaign: campaignName,
        name: this.creature.name
      }
    )
  }
}
