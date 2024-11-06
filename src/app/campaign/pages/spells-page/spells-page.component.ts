import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { SpellsPageStore } from './spells-page.store';

@Component({
  selector: 'app-spells-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './spells-page.component.html',
  styleUrl: './spells-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsPageComponent {
  store = inject(SpellsPageStore);
  globalStore = inject(GlobalStore);
}
