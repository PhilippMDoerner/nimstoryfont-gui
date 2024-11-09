import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { FilterListEntry } from '../../organisms/_model/filterListEntry';
import { GeneralOverviewType } from '../_models/generalOverviewType';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ImageCardComponent } from '../../molecules/image-card/image-card.component';
import { FilterListComponent } from '../../organisms/filter-list/filter-list.component';

@Component({
    selector: 'app-general-overview',
    templateUrl: './general-overview.component.html',
    styleUrls: ['./general-overview.component.scss'],
    standalone: true,
    imports: [
    PageContainerComponent,
    NgTemplateOutlet,
    RouterLink,
    ButtonComponent,
    ImageCardComponent,
    FilterListComponent,
    TitleCasePipe
],
})
export class GeneralOverviewComponent implements OnInit, OnChanges {
  OVERVIEW_IMAGE_MAP: { [key in GeneralOverviewType]: string } = {
    CHARACTER: '/assets/overview_images/characters.webp',
    CREATURE: '/assets/overview_images/creatures.webp',
    DIARYENTRY: '/assets/overview_images/diaryentries.webp',
    ITEM: '/assets/overview_images/items.webp',
    LOCATION: '/assets/overview_images/locations.webp',
    ORGANIZATION: '/assets/overview_images/organizations.webp',
  };

  @Input() serverUrl!: string;
  @Input() overviewType!: GeneralOverviewType;
  @Input() entries!: OverviewItem[];
  @Input() campaignName!: string;
  @Input() canCreate: boolean = false;

  displayEntries!: FilterListEntry<any>[];
  playerCharacters?: OverviewItem[];
  homeUrl!: string;
  overviewTypeName!: string;

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.overviewTypeName = this.overviewType.toLocaleLowerCase();
    this.homeUrl = this.routingService.getRoutePath('home', {
      campaign: this.campaignName,
    });

    this.setEntries();
  }

  ngOnChanges(): void {
    this.setEntries();
  }

  private setEntries(): void {
    switch (this.overviewType) {
      case 'CHARACTER':
        this.setCharacterEntries();
        break;

      case 'DIARYENTRY':
        this.setDiaryEntryEntries();
        break;

      case 'LOCATION':
        this.setLocationEntries();
        break;

      default:
        this.displayEntries = this.entries.map((entry) => ({
          ...entry,
          link: entry['getAbsoluteRouterUrl'](),
        }));
    }
  }

  private setCharacterEntries(): void {
    this.playerCharacters = this.entries.filter(
      (entry) => entry.player_character,
    );

    this.displayEntries = this.entries
      .filter((entry) => !entry.player_character)
      .map((entry) => ({
        ...entry,
        link: entry['getAbsoluteRouterUrl'](),
      }));
  }

  private setDiaryEntryEntries(): void {
    this.displayEntries = this.entries.map((diaryEntry) => ({
      ...diaryEntry,
      name_full: this.buildDiaryEntryNameForList(diaryEntry),
      link: diaryEntry['getAbsoluteRouterUrl'](),
    }));
  }

  private buildDiaryEntryNameForList(diaryEntry: OverviewItem): string {
    const startWithSessionNumber: string = `#${diaryEntry.session_details?.session_number}`;
    let title: string = diaryEntry.name != null ? `- ${diaryEntry.name}` : '';

    const isSmallScreen = false; // Constants.isSmallScreen
    if (isSmallScreen) return `${startWithSessionNumber} ${title}`;

    let daysCoveredByEntry: string = '';
    if (
      diaryEntry.session_details?.start_day != null &&
      diaryEntry.session_details.end_day != null
    ) {
      const padLength: number = 3;
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
  private setLocationEntries(): void {
    this.displayEntries = this.entries
      .map((locationEntry: OverviewItem) => {
        const parents: OverviewItem[] = this.getParentLocations(
          locationEntry,
          this.entries,
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

    var currentLocation: OverviewItem = location;
    var hasParentLocation = currentLocation.parent_location_details?.pk != null;
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
