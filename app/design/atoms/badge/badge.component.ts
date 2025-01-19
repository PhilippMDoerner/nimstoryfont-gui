import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ElementKind } from '../_models/button';
import { Icon } from '../_models/icon';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  imports: [NgTemplateOutlet, NgClass, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  kind = input.required<ElementKind>();
  text = input.required<string>();
  icon = input<Icon>();
  clickable = input(false);
  maxLength = input<number | undefined>();

  displayedText = computed(() => {
    const maxLength = this.maxLength();
    const shouldCutText = maxLength != null && this.text().length > maxLength;

    if (shouldCutText) {
      const cutText = this.text().slice(0, maxLength);
      return `${cutText}...`;
    }
    return this.text();
  });

  @Output() badgeClick = new EventEmitter<void>();
}
