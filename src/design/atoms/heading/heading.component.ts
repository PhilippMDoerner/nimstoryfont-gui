import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export const HEADING_LEVELS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
export type HeadingLevel = (typeof HEADING_LEVELS)[number];

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
