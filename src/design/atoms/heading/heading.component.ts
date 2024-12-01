import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof HEADING_LEVELS)[number];

export function nextLevel(level: HeadingLevel): HeadingLevel {
  switch (level) {
    case 'h1':
      return 'h2';
    case 'h2':
      return 'h3';
    case 'h3':
      return 'h4';
    case 'h4':
      return 'h5';
    case 'h5':
      return 'h6';
    case 'h6':
      return 'h6';
  }
}

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  headingLevel = input.required<HeadingLevel>();
}
