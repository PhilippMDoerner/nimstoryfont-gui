import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElementKind } from '../_models/button';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-interactive-badge',
  templateUrl: './interactive-badge.component.html',
  styleUrls: ['./interactive-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, NgClass, IconComponent],
})
export class InteractiveBadgeComponent {
  kind = input.required<ElementKind>();
  text = input.required<string>();
  textLink = input<string>();
  showDeleteButton = input<boolean>();
  iconKind = input<ElementKind>();

  iconKindVal = computed(() => this.iconKind() ?? this.kind());

  @Output() iconClick: EventEmitter<null> = new EventEmitter();
  @Output() labelClick: EventEmitter<null> = new EventEmitter();
}
