import { NgClass, NgOptimizedImage } from '@angular/common';
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
  imports: [NgClass, NgOptimizedImage],
})
export class ImageGridComponent<T> {
  EMPTY_IMAGE_URL: string = '';

  entries = input.required<T[]>();
  serverUrl = input.required<string>();
  imageProp = input.required<keyof T>();
  labelProp = input.required<keyof T>();
  iconProp = input<keyof T>();

  @Output() entryClick: EventEmitter<any> = new EventEmitter();

  columnCount = computed<ColumnCount>(() => {
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
}
