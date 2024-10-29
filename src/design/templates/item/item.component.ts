import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { Image } from 'src/app/_models/image';
import { Item } from 'src/app/_models/item';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  item = input.required<Item>();
  itemServerModel = input.required<Item | undefined>();
  serverUrl = input.required<string>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  imageServerModel = input.required<Image | undefined>();

  @Output() itemDelete: EventEmitter<Item> = new EventEmitter();
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  itemUpdate = output<Item>();

  campaignName = computed(() => this.item().campaign_details?.name);
  hasOwner = computed(() => this.item().owner_details != null);
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('item-overview', {
      campaign: this.campaignName(),
    }),
  );
  updateUrl = computed(() =>
    this.routingService.getRoutePath('item-update', {
      campaign: this.campaignName(),
      name: this.item().name,
    }),
  );
  ownerUrl = computed(() => {
    if (!this.hasOwner()) return undefined;

    return this.routingService.getRoutePath('character', {
      campaign: this.campaignName(),
      name: this.item().owner_details?.name,
    });
  });

  constructor(private routingService: RoutingService) {}

  onDescriptionUpdate(description: string): void {
    const isUpdatedAfterBeingOutdated = this.itemServerModel() !== undefined;
    const itemToUpdate = isUpdatedAfterBeingOutdated
      ? this.itemServerModel()
      : this.item();

    if (itemToUpdate) {
      this.itemUpdate.emit({ ...itemToUpdate, description });
    }
  }
}
