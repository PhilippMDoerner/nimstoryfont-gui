import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import {
  CharacterDetails,
  CharacterEncounter,
  CharacterEncounterConnections,
  CharacterOrganization,
} from 'src/app/_models/character';
import { Encounter } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { OverviewItem } from 'src/app/_models/overview';
import { CharacterPlayerClassConnectionDetail } from 'src/app/_models/playerclass';
import { Quote, QuoteConnection } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { ListEntry } from '../../molecules';

interface OrganizationEntry {
  organization: CharacterOrganization;
  link: string;
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character = input.required<CharacterDetails>();
  characterQuote = input<Quote>();
  campaignCharacters = input.required<OverviewItem[]>();
  serverUrl = input.required<string>();
  quoteServerModel = input<Quote>();
  imageServerModel = input<Image>();
  encounterServerModel = input<Encounter>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);

  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() quoteDelete: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteCreate: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteUpdate: EventEmitter<Quote> = new EventEmitter();
  @Output() quoteConnectionDelete: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output() quoteConnectionCreate: EventEmitter<QuoteConnection> =
    new EventEmitter();
  @Output()
  encounterConnectionDelete: EventEmitter<CharacterEncounterConnections> =
    new EventEmitter();
  @Output()
  encounterConnectionCreate: EventEmitter<CharacterEncounterConnections> =
    new EventEmitter();
  @Output() refreshQuote: EventEmitter<null> = new EventEmitter();
  @Output() characterDelete: EventEmitter<CharacterDetails> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<CharacterEncounter> =
    new EventEmitter();
  @Output() encounterUpdate: EventEmitter<CharacterEncounter> =
    new EventEmitter();

  campaignName = computed(() => this.character().campaign_details?.name);
  createUrl = computed(() => {
    return this.routingService.getRoutePath('character-update', {
      campaign: this.campaignName(),
      name: this.character().name,
    });
  });
  updateUrl!: string;
  homeUrl!: string;
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('character-overview', {
      campaign: this.campaignName(),
    }),
  );
  itemCreateUrl!: string;
  locationUrl = computed(() => {
    const locationName = this.character().current_location_details?.name;
    const parentLocationName =
      this.character().current_location_details?.parent_location;
    return this.routingService.getRoutePath('location', {
      name: locationName,
      parent_name: parentLocationName,
      campaign: this.campaignName(),
    });
  });
  organizations = computed<OrganizationEntry[]>(() => {
    return (
      this.character().organizations?.map((entry) => ({
        organization: entry,
        link: this.routingService.getRoutePath('organization', {
          name: entry.name,
          campaign: this.campaignName(),
        }),
      })) ?? []
    );
  });
  characterItems = computed<ListEntry[]>(() => {
    return (
      this.character().items?.map((item) => ({
        label: item.name,
        link: this.routingService.getRoutePath('item', {
          campaign: this.campaignName(),
          name: item.name,
        }),
      })) ?? []
    );
  });
  playerClasses = computed(() => {
    return this.character()
      .player_class_connections?.map(
        (con: CharacterPlayerClassConnectionDetail) =>
          con.player_class_details?.name,
      )
      .join(', ');
  });

  constructor(private routingService: RoutingService) {}

  routeToItem(): void {
    this.routingService.routeToPath('item-character-create', {
      character_name: this.character.name,
      campaign: this.campaignName(),
    });
  }
}
