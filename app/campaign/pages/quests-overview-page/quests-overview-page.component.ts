import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { QuestOverviewComponent } from 'src/design/templates/quest-overview/quest-overview.component';
import { QuestOverviewPageStore } from './quests-overview-page.store';

@Component({
  selector: 'app-quests-overview-page',
  standalone: true,
  imports: [QuestOverviewComponent],
  templateUrl: './quests-overview-page.component.html',
  styleUrl: './quests-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestsOverviewPageComponent {
  store = inject(QuestOverviewPageStore);
  globalStore = inject(GlobalStore);
}
