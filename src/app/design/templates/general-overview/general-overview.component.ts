import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { componentId } from 'src/utils/DOM';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';
import { ImageCardComponent } from '../../molecules/image-card/image-card.component';
import { FilterListEntry } from '../../organisms/_model/filterListEntry';
import { FilterListComponent } from '../../organisms/filter-list/filter-list.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { GeneralOverviewType } from '../_models/generalOverviewType';

@Component({
  selector: 'app-general-overview',
  templateUrl: './general-overview.component.html',
  styleUrls: ['./general-overview.component.scss'],
  imports: [
    PageContainerComponent,
    NgTemplateOutlet,
    RouterLink,
    ButtonLinkComponent,
    ImageCardComponent,
    FilterListComponent,
    TitleCasePipe,
    HotkeyDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralOverviewComponent {
  OVERVIEW_IMAGE_MAP: { [key in GeneralOverviewType]: string } = {
    CHARACTER: '/assets/overview_images/characters.webp',
    CREATURE: '/assets/overview_images/creatures.webp',
    DIARYENTRY: '/assets/overview_images/diaryentries.webp',
    ITEM: '/assets/overview_images/items.webp',
    LOCATION: '/assets/overview_images/locations.webp',
    ORGANIZATION: '/assets/overview_images/organizations.webp',
  };

  serverUrl = input.required<string>();
  overviewType = input.required<GeneralOverviewType>();
  entries = input.required<OverviewItem[]>();
  campaignName = input.required<string>();
  canCreate = input.required<boolean>();

  defaultPlayerCharacterImage = 'assets/default_images/icon_default.webp';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  displayEntries = computed<FilterListEntry<any>[]>(() => {
    switch (this.overviewType()) {
      case 'CHARACTER':
        return this.getCharacterEntries(this.entries());
      case 'DIARYENTRY':
        return this.getDiaryEntryEntries(this.entries());
      case 'LOCATION':
        return this.getLocationEntries(this.entries());
      default:
        return this.entries().map((entry) => ({
          ...entry,
          link: entry['getAbsoluteRouterUrl'](),
        }));
    }
  });

  playerCharacters = computed<OverviewItem[] | undefined>(() => {
    if (this.overviewType() !== 'CHARACTER') return undefined;
    return this.entries().filter((entry) => entry.player_character);
  });

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.campaignName,
    }),
  );
  overviewTypeName = computed(() => this.overviewType().toLocaleLowerCase());

  id = componentId();

  filterId = `${this.id}-filter`;
  headingSectionId = `${this.id}-heading-section`;
  bodySectionId = `${this.id}-body-section`;

  constructor(private routingService: RoutingService) {}

  private getCharacterEntries(
    entries: OverviewItem[],
  ): FilterListEntry<OverviewItem>[] {
    return entries
      .filter((entry) => !entry.player_character)
      .map((entry) => ({
        ...entry,
        link: entry['getAbsoluteRouterUrl'](),
      }));
  }

  private getDiaryEntryEntries(
    entries: OverviewItem[],
  ): FilterListEntry<OverviewItem>[] {
    return entries.map((diaryEntry) => ({
      ...diaryEntry,
      name_full: this.buildDiaryEntryNameForList(diaryEntry),
      link: diaryEntry['getAbsoluteRouterUrl'](),
    }));
  }

  private buildDiaryEntryNameForList(diaryEntry: OverviewItem): string {
    const startWithSessionNumber = `#${diaryEntry.session_details?.session_number}`;
    const title = diaryEntry.name != null ? `- ${diaryEntry.name}` : '';

    const isSmallScreen = false; // Constants.isSmallScreen
    if (isSmallScreen) return `${startWithSessionNumber} ${title}`;

    let daysCoveredByEntry = '';
    if (
      diaryEntry.session_details?.start_day != null &&
      diaryEntry.session_details.end_day != null
    ) {
      const padLength = 3;
      const startDay: string = this.padNumber(
        diaryEntry.session_details.start_day,
        padLength,
        '',
      );
      const endDay: string = this.padNumber(
        diaryEntry.session_details.end_day,
        padLength,
        '',
      );
      daysCoveredByEntry = `- Days ${startDay}-${endDay}`;
    }

    return `${startWithSessionNumber} ${daysCoveredByEntry} ${title}`;
  }

  /**
   * @description Generates the full name of a location based on its path in the location tree, concatenating
   * any parent name at the start.
   * @param {this} context - This component, needed to grant access despite the function being assigned to an object.
   */
  private getLocationEntries(
    entries: OverviewItem[],
  ): FilterListEntry<OverviewItem>[] {
    return entries
      .map((locationEntry: OverviewItem) => {
        const parents: OverviewItem[] = this.getParentLocations(
          locationEntry,
          entries,
        );
        const parentNames: string[] = parents
          .map((location: OverviewItem) => location.name)
          .reverse();
        const locationPath: string = parentNames.join(' - ');

        return {
          ...locationEntry,
          name_full: locationPath,
          link: locationEntry.getAbsoluteRouterUrl(),
        };
      })
      .sort((location1: OverviewItem, location2: OverviewItem) =>
        location1.name_full > location2.name_full ? 1 : -1,
      );
  }

  private getParentLocations(
    location: OverviewItem,
    listItems: OverviewItem[],
  ): OverviewItem[] {
    const parents: OverviewItem[] = [location];

    let currentLocation: OverviewItem = location;
    let hasParentLocation = currentLocation.parent_location_details?.pk != null;
    while (hasParentLocation) {
      // aka hasParentLocation
      const parentLocationPk: number = currentLocation.parent_location_details
        ?.pk as number;
      const parentLocation: OverviewItem | undefined = listItems.find(
        (entry) => entry.pk === parentLocationPk,
      );

      if (parentLocation == null) {
        break;
      }

      parents.push(parentLocation);
      currentLocation = parentLocation;
      hasParentLocation = currentLocation.parent_location_details?.pk != null;
    }

    return parents;
  }

  private padNumber(
    num: number,
    padCount: number,
    paddingCharacter = '0',
  ): string {
    const overlengthString: string = paddingCharacter.repeat(padCount) + num;
    return overlengthString.slice(padCount * -1);
  }
}
