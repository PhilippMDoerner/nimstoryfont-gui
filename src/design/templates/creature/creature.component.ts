import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { Creature } from 'src/app/_models/creature';
import { Image } from 'src/app/_models/image';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss'],
})
export class CreatureComponent {
  creature = input.required<Creature>();
  serverUrl = input.required<string>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  imageServerModel = input<Image>();

  @Output() creatureDelete: EventEmitter<Creature> = new EventEmitter();
  @Output() createImage: EventEmitter<Image> = new EventEmitter();
  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();

  campaignName = computed(() => this.creature().campaign_details?.name);
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('creature-overview', {
      campaign: this.campaignName(),
    }),
  );

  updateUrl = computed(() =>
    this.routingService.getRoutePath('creature-update', {
      campaign: this.campaignName(),
      name: this.creature.name,
    }),
  );

  constructor(private routingService: RoutingService) {}
}
