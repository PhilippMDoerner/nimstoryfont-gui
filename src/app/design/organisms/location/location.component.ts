import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { Location, LocationCharacter } from 'src/app/_models/location';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';
import { BadgeListComponent, BadgeListEntry } from 'src/app/design/molecules';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
