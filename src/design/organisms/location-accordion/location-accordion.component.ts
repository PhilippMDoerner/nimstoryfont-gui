import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { Location } from '../../../app/_models/location';
import { LocationComponent } from '../location/location.component';

interface AccordionEntry {
  value: Location;
  link: string;
}

@Component({
    selector: 'app-location-accordion',
    templateUrl: './location-accordion.component.html',
    styleUrls: ['./location-accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, RouterLink, NgbAccordionModule, LocationComponent]
})
export class LocationAccordionComponent {
  locations = input.required<Location[]>();
  campaignCharacters = input.required<OverviewItem[]>();
  canCreate = input(false);
  campaignName = input.required<string>();

  accordionEntries = computed<AccordionEntry[]>(() => {
    return this.locations().map((loc) => {
      const parentLocationName = loc.parent_location_details?.name;
      const campaignName = loc.campaign_details?.name;
      const link = this.routingService.getRoutePath('location', {
        parent_name: parentLocationName,
        name: loc.name,
        campaign: campaignName,
      });

      return {
        value: loc,
        link,
      };
    });
  });
  createUrl = computed(() =>
    this.routingService.getRoutePath('location-create', {
      campaign: this.campaignName(),
    }),
  );

  constructor(private routingService: RoutingService) {}
}
