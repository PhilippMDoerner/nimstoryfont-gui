import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MapMarker } from 'src/app/_models/mapMarker';
import { RoutingService } from 'src/app/_services/routing.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { ArticleFooterComponent } from '../../molecules/article-footer/article-footer.component';

@Component({
    selector: 'app-marker',
    templateUrl: './marker.component.html',
    styleUrls: ['./marker.component.scss'],
    standalone: true,
    imports: [PageContainerComponent, NgIf, RouterLink, ButtonComponent, IconComponent, ArticleFooterComponent]
})
export class MarkerComponent implements OnInit, OnChanges{
  @Input() marker!: MapMarker; 
  @Input() canDelete: boolean = false;
  @Input() canUpdate: boolean = false;
  
  @Output() markerDelete: EventEmitter<MapMarker> = new EventEmitter();
  
  locationUrl!: string;
  updateUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  
  ngOnInit(): void {
    const parentName = this.marker.location_details?.parent_location_name;
    const locationName = this.marker.location_details?.name;
    const campaignName = this.marker.campaign_details.name;
    
    this.locationUrl =  this.routingService.getRoutePath(
      'location', 
      {
        parent_name: parentName, 
        name: locationName,
        campaign: campaignName
      }
    );
    
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  private setUrls(){
    const parentName = this.marker.location_details?.parent_location_name;
    const locationName = this.marker.location_details?.name;
    const campaignName = this.marker.campaign_details.name;
    const mapName = this.marker.map_details?.name;
    
    this.updateUrl = this.routingService.getRoutePath(
      'marker-update',
      {
        parent_location_name: parentName,
        campaign: campaignName,
        location_name: locationName,
        map_name: mapName,
      }
    )
  }
}
