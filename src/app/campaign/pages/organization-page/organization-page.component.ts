import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { OrganizationComponent } from 'src/design/templates';
import { environment } from 'src/environments/environment';
import { OrganizationStore } from './organization-page.store';

@Component({
  selector: 'app-organization-page',
  standalone: true,
  imports: [OrganizationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization-page.component.html',
  styleUrl: './organization-page.component.scss',
})
export class OrganizationPageComponent {
  serverUrl = environment.backendDomain;
  store = inject(OrganizationStore);
  globalStore = inject(GlobalStore);
}
