import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MarkerComponent } from '../../../../design/templates/marker/marker.component';
import { MarkerPageStore } from './marker-page.store';

@Component({
  selector: 'app-marker-page',
  standalone: true,
  imports: [MarkerComponent],
  templateUrl: './marker-page.component.html',
  styleUrl: './marker-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkerPageComponent {
  store = inject(MarkerPageStore);
}
