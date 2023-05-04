import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Character, CharacterEncounter, CharacterEncounterConnections, CharacterOrganization } from 'src/app/_models/character';
import { Encounter } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { OverviewItem } from 'src/app/_models/overview';
import { CharacterPlayerClassConnection } from 'src/app/_models/playerclass';
import { Quote, QuoteConnection } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { ListEntry } from '../../molecules';

interface OrganizationEntry{
  organization: CharacterOrganization,
  link: string,
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnChanges{
  @Input() character!: Character;
  @Input() characterQuote!: Quote;
  @Input() campaignCharacters!: OverviewItem[];
  @Input() serverUrl!: string;
  @Input() quoteServerModel?: Quote;
  @Input() imageServerModel?: Image;
  @Input() encounterServerModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteConnectionDelete: EventEmitter<QuoteConnection> = new EventEmitter();
  @Output() quoteConnectionCreate: EventEmitter<QuoteConnection> = new EventEmitter();
  @Output() encounterConnectionDelete: EventEmitter<CharacterEncounterConnections> = new EventEmitter();
  @Output() encounterConnectionCreate: EventEmitter<CharacterEncounterConnections> = new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();
  @Output() characterDelete: EventEmitter<Character> = new EventEmitter();
  @Output() encounterDelete: EventEmitter<CharacterEncounter> = new EventEmitter();
  @Output() encounterUpdate: EventEmitter<CharacterEncounter> = new EventEmitter();
  
  createUrl!: string;
  updateUrl!: string;
  homeUrl!: string;
  overviewUrl!: string;
  itemCreateUrl!: string;
  locationUrl!: string;
  organizations!: OrganizationEntry[];
  characterItems!: ListEntry[];
  playerClasses?: string;
  
  constructor(
    private routingService: RoutingService,
  ){}

  ngOnInit(): void {
    const campaignName = this.character.campaign_details?.name;
    
    this.overviewUrl = this.routingService.getRoutePath(
      'character-overview', 
      {campaign: campaignName}
    );
    this.setUrls();
    this.setPlayerClassString();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  setUrls(){
    const campaignName = this.character.campaign_details?.name;
    
    this.locationUrl = this.routingService.getRoutePath(
      'location', 
      {
        name: this.character.current_location_details?.name,
        parent_name: this.character.current_location_details?.parent_location,
        campaign: campaignName
      }
    ); 
    
    this.organizations = this.character.organizations?.map(entry => ({
      organization: entry,
      link: this.routingService.getRoutePath(
        'organization', 
        {name: entry.name, campaign: campaignName}
      )
    })) ?? [];
    
    this.updateUrl = this.routingService.getRoutePath(
      'character-update',
      {
        campaign: campaignName,
        name: this.character.name
      }
    )
    
    this.setPlayerClassString();
  }
  
  setPlayerClassString(): void{
    this.playerClasses = this.character.player_class_connections
      ?.map((con: CharacterPlayerClassConnection) => con.player_class_details?.name)
      .join(", ");
  }
  
  setItems(){
    const campaignName = this.character.campaign_details?.name;
    this.characterItems = this.character.items?.map(item => ({
      label: item.name,
      link: this.routingService.getRoutePath(
        'item',
        {campaign: campaignName, name: item.name},
      ),
    })) ?? [];
  }
  
  routeToItem(): void{
    const campaignName = this.character.campaign_details?.name;
    this.routingService.routeToPath(
      'item-character-create', 
      {
        character_name: this.character.name, 
        campaign: campaignName
      }
    );
  }
}
