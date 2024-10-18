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
  CharacterItem,
  CharacterOrganizationMembership,
} from 'src/app/_models/character';
import { Encounter } from 'src/app/_models/encounter';
import { Image } from 'src/app/_models/image';
import { OverviewItem } from 'src/app/_models/overview';
import { CharacterPlayerClassConnectionDetail } from 'src/app/_models/playerclass';
import { Quote, QuoteConnection } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { BadgeListEntry, ListEntry } from '../../molecules';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  character = input.required<CharacterDetails>();
  characterQuote = input<Quote>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignOrganizations = input.required<OverviewItem[]>();
  serverUrl = input.required<string>();
  quoteServerModel = input<Quote>();
  imageServerModel = input<Image>();
  sessions = input.required<OverviewItem[]>();
  encounters = input.required<OverviewItem[]>();
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
  @Output() refreshQuote = new EventEmitter<void>();
  @Output() characterDelete = new EventEmitter<CharacterDetails>();
  @Output() encounterDelete = new EventEmitter<CharacterEncounter>();
  @Output() encounterUpdate = new EventEmitter<CharacterEncounter>();
  @Output()
  organizationMembershipCreate =
    new EventEmitter<CharacterOrganizationMembership>();
  @Output()
  organizationMembershipDelete =
    new EventEmitter<CharacterOrganizationMembership>();

  campaignName = computed(() => this.character().campaign_details?.name);
  createUrl = computed(() => {
    return this.routingService.getRoutePath('character-update', {
      campaign: this.campaignName(),
      name: this.character().name,
    });
  });
  updateUrl = computed(() => {
    return this.routingService.getRoutePath('character-update', {
      campaign: this.campaignName(),
      name: this.character().name,
    });
  });
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('character-overview', {
      campaign: this.campaignName(),
    }),
  );
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
  organizationMemberships = computed<
    BadgeListEntry<CharacterOrganizationMembership>[]
  >(
    () =>
      this.character().organizations?.map((org) =>
        this.toBadgeListEntry(org),
      ) ?? [],
  );
  characterItems = computed<ListEntry[]>(
    () => this.character().items?.map((item) => this.toListEntry(item)) ?? [],
  );
  playerClasses = computed(() => {
    return this.character()
      .player_class_connections?.map(
        (con: CharacterPlayerClassConnectionDetail) =>
          con.player_class_details?.name,
      )
      .join(', ');
  });

  constructor(private routingService: RoutingService) {}

  routeToItemCreate(): void {
    this.routingService.routeToPath('item-character-create', {
      character_name: this.character.name,
      campaign: this.campaignName(),
    });
  }

  onMembershipCreate(org: OverviewItem): void {
    const newMembership: Partial<CharacterOrganizationMembership> = {
      name: org.name,
      organization_id: org.pk,
      role: 'member',
    };
    this.organizationMembershipCreate.emit(
      newMembership as CharacterOrganizationMembership,
    );
  }

  private toBadgeListEntry(
    org: CharacterOrganizationMembership,
  ): BadgeListEntry<CharacterOrganizationMembership> {
    return {
      badgeValue: org,
      text: org.name,
      link: this.routingService.getRoutePath('organization', {
        name: org.name,
        campaign: this.campaignName(),
      }),
    };
  }

  private toListEntry(item: CharacterItem): ListEntry {
    return {
      label: item.name,
      link: this.routingService.getRoutePath('item', {
        campaign: this.campaignName(),
        name: item.name,
      }),
    };
  }
}
