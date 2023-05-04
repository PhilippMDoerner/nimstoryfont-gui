import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry } from 'src/app/design/molecules';
import { Location, LocationCharacter } from '../../../_models/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnChanges{
  @Input() location!: Location;
  @Input() campaignCharacters!: OverviewItem[];
  
  localCharacters: BadgeListEntry[] = [];
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.setBadgeListEntries();
  }
  
  ngOnChanges(): void {
    this.setBadgeListEntries();
  }
  
  setBadgeListEntries(){
    const characters: LocationCharacter[] = this.location.characters ?? [];
    this.localCharacters = characters.map(character => {
      const campaignName: string = this.location.campaign_details?.name as string;
      const link = this.routingService.getRoutePath(
        "character", 
        {
          campaign: campaignName, 
          name: character.name
        }
      );
      
      return {
        badgeValue: character,
        text: character.name,
        link,
      };
    });
  }
}
