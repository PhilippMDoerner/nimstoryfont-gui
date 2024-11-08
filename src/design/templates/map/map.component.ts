import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ExtendedMap } from 'src/app/_models/map';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  mapChoices = input.required<OverviewItem[]>();
  map = input.required<ExtendedMap>();
  serverUrl = input.required<string>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();

  @Output() mapDelete: EventEmitter<ExtendedMap> = new EventEmitter();
  @Output() mapChange: EventEmitter<OverviewItem> = new EventEmitter();

  campaignName = computed(() => this.map().campaign_details?.name);
  createUrl = computed(() =>
    this.routingService.getRoutePath('map-create', {
      campaign: this.campaignName(),
    }),
  );
  updateUrl = computed(() => {
    const mapName = this.map().name;
    return this.routingService.getRoutePath('map-update', {
      campaign: this.campaignName(),
      name: mapName,
    });
  });
  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.campaignName(),
    }),
  );

  constructor(private routingService: RoutingService) {}

  onMapDelete(): void {
    this.mapDelete.emit(this.map());
  }

  onMapChange(event: OverviewItem): void {
    this.mapChange.emit(event);
  }
}
