import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { SessionaudioComponent } from '../../../../design/templates/sessionaudio/sessionaudio.component';
import { SessionaudioPageStore } from './sessionaudio-page.store';

@Component({
  selector: 'app-sessionaudio-page',
  standalone: true,
  imports: [SessionaudioComponent],
  templateUrl: './sessionaudio-page.component.html',
  styleUrl: './sessionaudio-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionaudioPageComponent {
  serverUrl = environment.backendDomain;
  globalStore = inject(GlobalStore);
  store = inject(SessionaudioPageStore);
}
