import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { RulesPageStore } from './rules-page.store';

@Component({
  selector: 'app-rules-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './rules-page.component.html',
  styleUrl: './rules-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesPageComponent {
  store = inject(RulesPageStore);
  globalStore = inject(GlobalStore);
}
