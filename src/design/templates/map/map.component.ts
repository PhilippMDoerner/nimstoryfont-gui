import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ExtendedMap } from 'src/app/_models/map';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges{
  @Input() mapChoices!: OverviewItem[];
  @Input() map!: ExtendedMap;
  @Input() serverUrl!: string;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() mapDelete: EventEmitter<ExtendedMap> = new EventEmitter();
  @Output() mapChange: EventEmitter<OverviewItem> = new EventEmitter();
  
  createUrl!: string;
  updateUrl!: string;
  homeUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.map.campaign_details?.name;
    this.createUrl = this.routingService.getRoutePath(
      'map-create', 
      {campaign: campaignName}
    );
    this.homeUrl = this.routingService.getRoutePath(
      'home1', 
      {campaign: campaignName}
    );
    this.setUpdateUrl();
  }
  
  ngOnChanges(): void {
    this.setUpdateUrl();
  }
  
  setUpdateUrl(): void{
    const campaignName = this.map.campaign_details?.name;
    const mapName = this.map.name;
    this.updateUrl = this.routingService.getRoutePath(
      "map-update", 
      {
        campaign: campaignName, 
        name: mapName,
      }
    );
  }
  
  onMapDelete(): void{
    this.mapDelete.emit(this.map);
  }
  
  onMapChange(event: OverviewItem): void{
    this.mapChange.emit(event);
  }
}
