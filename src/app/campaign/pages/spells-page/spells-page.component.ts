import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { SpellsTemplateComponent } from 'src/design/templates/spells-template/spells-template.component';
import { SpellsPageStore } from './spells-page.store';

@Component({
    selector: 'app-spells-page',
    imports: [SpellsTemplateComponent],
    templateUrl: './spells-page.component.html',
    styleUrl: './spells-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellsPageComponent {
  store = inject(SpellsPageStore);
  globalStore = inject(GlobalStore);
}
