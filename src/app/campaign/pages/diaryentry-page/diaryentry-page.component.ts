import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { DiaryentryComponent } from 'src/design/templates/diaryentry/diaryentry.component';
import { DiaryentryPageStore } from './diaryentry-page.store';

@Component({
  selector: 'app-diaryentry-page',
  standalone: true,
  imports: [DiaryentryComponent],
  templateUrl: './diaryentry-page.component.html',
  styleUrl: './diaryentry-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryentryPageComponent {
  globalStore = inject(GlobalStore);
  store = inject(DiaryentryPageStore);
  routingService = inject(RoutingService);

  onDelete() {
    this.store.deleteDiaryEntry();
    this.routingService.routeToPath('diaryentry-overview', {
      campaign: this.globalStore.campaignName(),
    });
  }
}
