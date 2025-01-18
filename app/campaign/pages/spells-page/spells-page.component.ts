import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SpellsTemplateComponent } from 'src/app/design/templates/spells-template/spells-template.component';
import { GlobalStore } from 'src/app/global.store';
import { SpellsPageStore } from './spells-page.store';

@Component({
  selector: 'app-spells-page',
  imports: [SpellsTemplateComponent],
  templateUrl: './spells-page.component.html',
  styleUrl: './spells-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellsPageComponent {
  store = inject(SpellsPageStore);
  globalStore = inject(GlobalStore);
}
