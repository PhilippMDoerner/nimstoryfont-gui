import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { HtmlTextComponent, SeparatorComponent } from 'src/design/atoms';
import { BadgeListComponent, BadgeListEntry } from 'src/design/molecules';
import { Location, LocationCharacter } from '../../../app/_models/location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SeparatorComponent, HtmlTextComponent, BadgeListComponent],
})
export class LocationComponent {
  routingService = inject(RoutingService);

  location = input.required<Location>();
  campaignCharacters = input.required<OverviewItem[]>();

  localCharacters = computed<BadgeListEntry<LocationCharacter>[]>(() => {
    const characters: LocationCharacter[] = this.location().characters ?? [];
    const campaignName: string = this.location().campaign_details
      ?.name as string;
    return characters.map((character) => {
      const link = this.routingService.getRoutePath('character', {
        campaign: campaignName,
        name: character.name,
      });

      return {
        badgeValue: character,
        text: character.name,
        link,
      };
    });
  });
}
