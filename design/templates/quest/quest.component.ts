import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { Quest } from 'src/app/_models/quest';
import { RoutingService } from 'src/app/_services/routing.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../atoms/button/button.component';
import { NgTemplateOutlet } from '@angular/common';
import { EditableTextComponent } from '../../organisms/editable-text/editable-text.component';
import { ArticleFooterComponent } from '../../molecules/article-footer/article-footer.component';

@Component({
    selector: 'app-quest',
    templateUrl: './quest.component.html',
    styleUrls: ['./quest.component.scss'],
    standalone: true,
    imports: [
        PageContainerComponent,
        RouterLink,
        ButtonComponent,
        NgTemplateOutlet,
        EditableTextComponent,
        ArticleFooterComponent,
    ],
})
export class QuestComponent {
  quest = input.required<Quest>();
  questServerModel = input.required<Quest | undefined>();
  canUpdate = input.required<boolean>();
  canDelete = input.required<boolean>();

  @Output() questDelete: EventEmitter<Quest> = new EventEmitter();
  questUpdate = output<Quest>();

  campaignName = computed(() => this.quest().campaign_details?.name);
  questGiverUrl = computed(() =>
    this.routingService.getRoutePath('character', {
      campaign: this.campaignName(),
      name: this.quest().giver_details?.name,
    }),
  );
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('quest-overview', {
      campaign: this.campaignName(),
    }),
  );
  updateUrl = computed(() =>
    this.routingService.getRoutePath('quest-update', {
      campaign: this.campaignName(),
      name: this.quest().name,
    }),
  );

  constructor(private routingService: RoutingService) {}

  onDescriptionUpdate(description: string): void {
    const isUpdatedAfterBeingOutdated = this.questServerModel() !== undefined;
    const itemToUpdate = isUpdatedAfterBeingOutdated
      ? this.questServerModel()
      : this.quest();

    if (itemToUpdate) {
      this.questUpdate.emit({ ...itemToUpdate, description });
    }
  }
}
