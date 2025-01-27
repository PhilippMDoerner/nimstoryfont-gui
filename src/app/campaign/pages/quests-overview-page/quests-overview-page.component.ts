import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QuestOverviewComponent } from 'src/app/design/templates/quest-overview/quest-overview.component';
import { GlobalStore } from 'src/app/global.store';
import { QuestOverviewPageStore } from './quests-overview-page.store';

@Component({
  selector: 'app-quests-overview-page',
  imports: [QuestOverviewComponent],
  templateUrl: './quests-overview-page.component.html',
  styleUrl: './quests-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestsOverviewPageComponent {
  store = inject(QuestOverviewPageStore);
  globalStore = inject(GlobalStore);
}
