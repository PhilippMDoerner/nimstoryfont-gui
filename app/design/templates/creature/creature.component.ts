import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Creature } from 'src/app/_models/creature';
import { Image } from 'src/app/_models/image';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { ArticleFooterComponent } from 'src/app/design/molecules';
import { EditableTextComponent } from 'src/app/design/organisms/editable-text/editable-text.component';
import { ImageCarouselCardComponent } from 'src/app/design/organisms/image-carousel-card/image-carousel-card.component';
import { PageContainerComponent } from 'src/app/design/organisms/page-container/page-container.component';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.scss'],
  imports: [
    EditableTextComponent,
    PageContainerComponent,
    ButtonComponent,
    RouterLink,
    ImageCarouselCardComponent,
    ArticleFooterComponent,
  ],
})
export class CreatureComponent {
  creature = input.required<Creature>();
  creatureServerModel = input.required<Creature | undefined>();
  serverUrl = input.required<string>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);
  imageServerModel = input<Image>();

  creatureUpdate = output<Creature>();
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
      name: this.creature().name,
    }),
  );

  onDescriptionUpdate(description: string): void {
    const isUpdatedAfterBeingOutdated =
      this.creatureServerModel() !== undefined;
    const creatureToUpdate = isUpdatedAfterBeingOutdated
      ? this.creatureServerModel()
      : this.creature();

    if (creatureToUpdate) {
      this.creatureUpdate.emit({ ...creatureToUpdate, description });
    }
  }

  constructor(private routingService: RoutingService) {}
}
