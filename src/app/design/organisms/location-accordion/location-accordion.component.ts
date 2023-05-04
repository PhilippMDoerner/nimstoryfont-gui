import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/_services/routing.service';
import { Location } from '../../../_models/location';

interface AccordiongEntry {
  value: Location,
  link: string,
}

@Component({
  selector: 'app-location-accordion',
  templateUrl: './location-accordion.component.html',
  styleUrls: ['./location-accordion.component.scss']
})
export class LocationAccordionComponent implements OnInit, OnChanges{
  @Input() locations!: Location[];
  @Input() canCreate: boolean = false;
  
  accordionEntries: AccordiongEntry[] = [];
  createUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.setAccordionEntries();
    this.createUrl = this.routingService.getRoutePath('location-create');
  }
  
  ngOnChanges(): void {
    this.setAccordionEntries();
  }
  
  setAccordionEntries(){
    this.accordionEntries = this.locations.map(loc => {
      const parentLocationName = loc.parent_location_details?.name;
      const campaignName = loc.campaign_details?.name;
      const link = this.routingService.getRoutePath(
        'location',
        {
          parent_name: parentLocationName, 
          name: loc.name,
          campaign: campaignName,
        }
      );
      
      return {
        value: loc,
        link,
      }
    });
  }
}
