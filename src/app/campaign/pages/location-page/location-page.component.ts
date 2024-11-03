import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { LocationPageStore } from './location-page.store';

@Component({
  selector: 'app-location-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TemplatesModule],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
})
export class LocationPageComponent {
  serverUrl = environment.backendDomain;
  store = inject(LocationPageStore);
}
