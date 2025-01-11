import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { RulesTemplateComponent } from 'src/design/templates/rules-template/rules-template.component';
import { RulesPageStore } from './rules-page.store';

@Component({
    selector: 'app-rules-page',
    imports: [RulesTemplateComponent],
    templateUrl: './rules-page.component.html',
    styleUrl: './rules-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RulesPageComponent {
  store = inject(RulesPageStore);
  globalStore = inject(GlobalStore);
}
