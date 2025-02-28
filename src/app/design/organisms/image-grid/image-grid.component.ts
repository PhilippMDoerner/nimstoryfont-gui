import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

type ColumnCount = 1 | 2 | 3;

export type ImageGridEntry = {
  icon: string | undefined;
  link: string;
  imageUrl: string | undefined;
  label: string;
};

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss'],
  imports: [NgClass, NgOptimizedImage, RouterLink],
})
export class ImageGridComponent {
  EMPTY_IMAGE_URL: string = '';

  entries = input.required<ImageGridEntry[]>();
  serverUrl = input.required<string>();

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
