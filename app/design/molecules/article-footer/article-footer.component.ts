import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { ConfirmationToggleButtonComponent } from '../confirmation-toggle-button/confirmation-toggle-button.component';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ButtonComponent,
    RouterLink,
    NgTemplateOutlet,
    ConfirmationToggleButtonComponent,
  ],
})
export class ArticleFooterComponent {
  buttonLabel = input.required<string>();
  buttonLink = input<string | undefined>(undefined);
  deleteMessage = input<string>('Delete this entry?');
  showDelete = input<boolean>(true);

  @Output() buttonClick: EventEmitter<null> = new EventEmitter();
  @Output() delete: EventEmitter<null> = new EventEmitter();
}
