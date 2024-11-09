import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';

type ColumnCount = 1 | 2 | 3;

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class ImageGridComponent<T> {
  EMPTY_IMAGE_URL: string = '';

  entries = input.required<T[]>();
  serverUrl = input.required<string>();
  imageProp = input.required<keyof T>();
  labelProp = input.required<keyof T>();

  @Output() entryClick: EventEmitter<any> = new EventEmitter();

  entryGrid = computed<T[][]>(() =>
    this.chunk(this.entries(), this.columnCount()),
  );
  columnCount = computed(() => {
    switch (this.entries().length) {
      case 1:
        return 1;
      case 2:
      case 4:
        return 2;
      default:
        return 3;
    }
  });

  chunk(input: T[], size: number): T[][] {
    return input.reduce((gridAccumultor, item, idx) => {
      return idx % size === 0
        ? [...gridAccumultor, [item]]
        : [
            ...gridAccumultor.slice(0, -1),
            [...gridAccumultor.slice(-1)[0], item],
          ];
    }, [] as T[][]);
  }
}
