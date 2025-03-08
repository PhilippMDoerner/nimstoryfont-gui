import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { IconComponent } from '../../atoms/icon/icon.component';
@Component({
  selector: 'app-drag-and-drop-list',
  imports: [CdkDrag, CdkDragHandle, CdkDragPlaceholder, IconComponent],
  templateUrl: './drag-and-drop-list.component.html',
  styleUrl: './drag-and-drop-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [CdkDropList],
})
export class DragAndDropListComponent<T> {
  entries = input.required<T[]>();
  labelProp = input.required<keyof T>();
  idProp = input.required<keyof T>();
  backgroundColor = input<string>('var(--bs-white)');
  color = input<string>('var(--bs-black)');

  changed = output<CdkDragDrop<T[]>>();

  constructor(directive: CdkDropList) {
    directive.dropped
      .pipe(
        filter((event) => event.previousIndex !== event.currentIndex),
        takeUntilDestroyed(),
      )
      .subscribe((event) => this.changed.emit(event));
  }
}
