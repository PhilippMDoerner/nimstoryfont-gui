import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { DiaryentryPageStore } from './diaryentry-page.store';

@Component({
  selector: 'app-diaryentry-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './diaryentry-page.component.html',
  styleUrl: './diaryentry-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiaryentryPageComponent {
  globlStore = inject(GlobalStore);
  store = inject(DiaryentryPageStore);
}
