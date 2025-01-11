import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { SessionsTemplateComponent } from '../../../../design/templates/sessions-template/sessions-template.component';
import { SessionsPageStore } from './sessions-page.store';

@Component({
    selector: 'app-sessions-page',
    imports: [SessionsTemplateComponent],
    templateUrl: './sessions-page.component.html',
    styleUrl: './sessions-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionsPageComponent {
  store = inject(SessionsPageStore);
  globalStore = inject(GlobalStore);
}
