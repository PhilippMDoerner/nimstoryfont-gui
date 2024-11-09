import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';
import { Quest } from 'src/app/_models/quest';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { QuestComponent } from 'src/design/templates/quest/quest.component';
import { QuestPageStore } from './quest-page.store';

@Component({
  selector: 'app-quest-page',
  standalone: true,
  imports: [QuestComponent],
  templateUrl: './quest-page.component.html',
  styleUrl: './quest-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestPageComponent {
  store = inject(QuestPageStore);
  globalStore = inject(GlobalStore);
  routingService = inject(RoutingService);

  questDeleteState$ = toObservable(this.store.questDeleteState);

  constructor() {
    this.routeToOverviewOnMissingArticle();
  }

  onQuestDelete(questPk: number) {
    this.store.deleteQuest(questPk);
    this.questDeleteState$
      .pipe(
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() => {
        this.routingService.routeToPath('quest-overview', {
          campaign: this.globalStore.campaignName(),
        });
      });
  }

  onQuestUpdate(newQuest: Quest) {
    this.store.updateQuest(newQuest);
  }

  private routeToOverviewOnMissingArticle() {
    effect(() => {
      const characterDoesNotExist = this.store.questError()?.status === 404;
      if (characterDoesNotExist) {
        this.routingService.routeToPath('quest-overview', {
          campaign: this.globalStore.campaignName(),
        });
      }
    });
  }
}
