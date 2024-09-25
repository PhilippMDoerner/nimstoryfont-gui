import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Image } from 'src/app/_models/image';
import { Location } from 'src/app/_models/location';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry, ListEntry } from '../../molecules';

interface ParentLocation{
  link: string;
  label: string;
}

@Component({
  selector: 'app-location-template',
  templateUrl: './location-template.component.html',
  styleUrls: ['./location-template.component.scss']
})
export class LocationTemplateComponent implements OnInit, OnChanges{
  @Input() location!: Location;
  @Input() serverUrl!: string;
  @Input() imageServerModel?: Image;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() locationDelete: EventEmitter<Location> = new EventEmitter();
  
  overviewUrl!: string;
  updateUrl!: string;
  locationCharacters!: ListEntry[];
  parentLocations!: ParentLocation[];
  markerEntries!: BadgeListEntry[];
  markerCreateUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.location.campaign_details?.name;

    this.overviewUrl = this.routingService.getRoutePath(
      'location-overview', 
      {campaign: campaignName}
    );
    
    this.markerCreateUrl = this.routingService.getRoutePath('marker-create', {
      parent_location_name: this.location.parent_location_details?.name,
      location_name: this.location.name,
      campaign: campaignName
    });
    
    this.setParentLocations();
    this.setLocationCharacters();
    this.setMarkerEntries();
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setParentLocations();
    this.setLocationCharacters();
    this.setMarkerEntries();
    this.setUrls();
  }
  
  routeToCharacterCreation(): void{
    const campaignName = this.location.campaign_details?.name;
    this.routingService.routeToPath(
      'character-create',
      { campaign: campaignName }
    );
  }
  
  private setUrls(): void{
    const campaignName = this.location.campaign_details?.name;
    this.updateUrl = this.routingService.getRoutePath(
      'location-update', 
      {
        name: this.location.name,
        parent_name: this.location.parent_location,
        campaign: campaignName
      }
    ); 
  }
  
  private setLocationCharacters(): void{
    const campaignName = this.location.campaign_details?.name;
    this.locationCharacters = this.location.characters?.map(
      character => ({
        label: character.name,
        link: this.routingService.getRoutePath(
          'character',
          {
            campaign: campaignName,
            name: character.name,
          }
        ),
      })
    ) ?? [];
  }
  
  private setMarkerEntries(): void{
    const campaignName = this.location.campaign_details?.name;
    this.markerEntries = this.location.marker_details?.map(
      marker => ({
        text: marker.map,
        link: this.routingService.getRoutePath('marker', {
          parent_location_name: this.location.parent_location_details?.name ?? 'None', 
          location_name: this.location.name, 
          map_name: marker.map,
          campaign: campaignName
        }),
        badgeValue: marker.map,
      })
    ) ?? [];
  }
  
  private setParentLocations(): void{
    const parentNames = this.location.parent_location_list;
    this.parentLocations = parentNames?.map(
      parent => ({
        label: parent,
        link: this.buildLocationUrl(parent, parentNames)
      })
    ) ?? [];
  }
  
  private buildLocationUrl(locationName: string, locationList: string[]){
    if (!locationList) throw "Tried building a route to a location in parent_location_list when there is no parent_location_list";
    
    const index: number = locationList.indexOf(locationName);
    const parentLocationName: string = (index === 0) ? "None" : locationList[index-1];
    const campaignName = this.location.campaign_details?.name;
    const locationUrl: string = this.routingService.getRoutePath('location', {
      parent_name: parentLocationName, 
      name: locationName,
      campaign: campaignName,
    });
    
    return locationUrl;
  }
}
