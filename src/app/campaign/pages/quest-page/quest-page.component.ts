import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { QuestPageStore } from './quest-page.store';

@Component({
  selector: 'app-quest-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './quest-page.component.html',
  styleUrl: './quest-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestPageComponent {
  store = inject(QuestPageStore);
  globalStore = inject(GlobalStore);
}
