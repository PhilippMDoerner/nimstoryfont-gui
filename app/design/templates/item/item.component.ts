import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/_models/image';
import { Item } from 'src/app/_models/item';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges{
  @Input() item!: Item;
  @Input() serverUrl!: string;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() imageServerModel?: Image;
  
  @Output() itemDelete: EventEmitter<Item> = new EventEmitter();
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  
  overviewUrl!: string;
  updateUrl!: string;
  ownerUrl?: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.item.campaign_details?.name;
    this.overviewUrl = this.routingService.getRoutePath(
      'item-overview', 
      {campaign: campaignName}
    );
    
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  setUrls(): void{
    const campaignName = this.item.campaign_details?.name;

    this.updateUrl = this.routingService.getRoutePath(
      'item-update',
      {
        campaign: campaignName,
        name: this.item.name
      }
    );
    
    this.ownerUrl = this.routingService.getRoutePath(
      'character',
      {
        campaign: campaignName,
        name: this.item.owner_details?.name,
      }
    )
  }
}
