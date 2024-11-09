import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SafeHtmlPipe } from '../_pipes/safeHtml';

@Component({
  selector: 'app-html-text',
  templateUrl: './html-text.component.html',
  styleUrls: ['./html-text.component.scss'],
  standalone: true,
  imports: [SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlTextComponent {
  text = input.required<string>();
}
