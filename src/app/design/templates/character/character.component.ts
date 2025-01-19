import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
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
import {
  CharacterPlayerClassConnectionDetail,
  PlayerClass,
} from 'src/app/_models/playerclass';
import { Quote, QuoteConnection, QuoteRaw } from 'src/app/_models/quote';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InfoCircleTooltipComponent } from '../../atoms/info-circle-tooltip/info-circle-tooltip.component';
import { BadgeListEntry, ListEntry } from '../../molecules';
import { ArticleFooterComponent } from '../../molecules/article-footer/article-footer.component';
import { BadgeListComponent } from '../../molecules/badge-list/badge-list.component';
import { ListComponent } from '../../molecules/list/list.component';
import { EditableTextComponent } from '../../organisms/editable-text/editable-text.component';
import { EncounterAccordionComponent } from '../../organisms/encounter-accordion/encounter-accordion.component';
import { ImageCarouselCardComponent } from '../../organisms/image-carousel-card/image-carousel-card.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { QuoteFieldComponent } from '../../organisms/quote-field/quote-field.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  imports: [
    PageContainerComponent,
    RouterLink,
    ButtonComponent,
    ImageCarouselCardComponent,
    QuoteFieldComponent,
    BadgeListComponent,
    EditableTextComponent,
    ListComponent,
    InfoCircleTooltipComponent,
    EncounterAccordionComponent,
    ArticleFooterComponent,
  ],
})
export class CharacterComponent {
  character = input.required<CharacterDetails>();
  characterServerModel = input<CharacterDetails>();
  characterQuote = input<Quote>();
  campaignNPCCharacters = input.required<OverviewItem[]>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignOrganizations = input.required<OverviewItem[]>();
  campaignLocations = input.required<OverviewItem[]>();
  campaignClasses = input.required<PlayerClass[]>();
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
  @Output() quoteCreate: EventEmitter<QuoteRaw> = new EventEmitter();
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
  characterUpdate = output<CharacterDetails>();
  @Output() encounterDelete = new EventEmitter<CharacterEncounter>();
  @Output() encounterUpdate = new EventEmitter<CharacterEncounter>();
  @Output()
  organizationMembershipCreate =
    new EventEmitter<CharacterOrganizationMembership>();
  @Output()
  organizationMembershipDelete =
    new EventEmitter<CharacterOrganizationMembership>();
  addClass = output<PlayerClass>();
  removeClass = output<PlayerClass>();

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
  joinableOrganizations = computed(() => {
    const joinedOrgIds = this.organizationMemberships().map(
      (membership) => membership.badgeValue.organization_id,
    );
    return this.campaignOrganizations().filter(
      (org) => org.pk && !joinedOrgIds.includes(org.pk),
    );
  });
  characterItems = computed<ListEntry[]>(
    () => this.character().items?.map((item) => this.toListEntry(item)) ?? [],
  );
  characterClasses = computed<BadgeListEntry<PlayerClass>[]>(() => {
    return (
      this.character().player_class_connections?.map(
        this.connectionToBadgeListEntry,
      ) ?? []
    );
  });

  constructor(private routingService: RoutingService) {}

  routeToItemCreate(): void {
    this.routingService.routeToPath('item-create', {
      campaign: this.campaignName(),
    });
    // this.routingService.routeToPath('item-character-create', {
    //   character_name: this.character.name,
    //   campaign: this.campaignName(),
    // });
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

  onDescriptionUpdate(description: string): void {
    const isUpdatedAfterBeingOutdated =
      this.characterServerModel() !== undefined;
    const characterToUpate = isUpdatedAfterBeingOutdated
      ? this.characterServerModel()
      : this.character();

    if (characterToUpate) {
      this.characterUpdate.emit({ ...characterToUpate, description });
    }
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

  private connectionToBadgeListEntry(
    connection: CharacterPlayerClassConnectionDetail,
  ): BadgeListEntry<PlayerClass> {
    return {
      text: connection.player_class_details?.name ?? '',
      badgeValue: connection.player_class_details as PlayerClass,
    };
  }
}
