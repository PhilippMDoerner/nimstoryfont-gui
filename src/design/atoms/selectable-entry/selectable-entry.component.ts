import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-selectable-entry',
  standalone: true,
  imports: [NgClass, IconComponent, NgTemplateOutlet],
  templateUrl: './selectable-entry.component.html',
  styleUrl: './selectable-entry.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectableEntryComponent {
  label = input.required<string>();
  isSelectable = input<boolean>(false);
  isActive = input<boolean>(false);
  borderColorVar = input<string>('secondary');

  entryClick = output<'ACTIVE' | 'INACTIVE'>();
}
