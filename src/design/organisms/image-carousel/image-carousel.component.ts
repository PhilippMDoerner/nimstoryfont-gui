import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { Image } from '../../../app/_models/image';

@Component({
    selector: 'app-image-carousel',
    templateUrl: './image-carousel.component.html',
    styleUrls: ['./image-carousel.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgbCarouselModule, ButtonComponent, NgTemplateOutlet]
})
export class ImageCarouselComponent {
  images = input.required<Image[]>();
  serverUrl = input.required<string>();
  canDelete = input<boolean>(false);
  canCreate = input<boolean>(false);
  canUpdate = input<boolean>(false);
  currentSlideIndex = input.required<number>();

  @Output() deleteImage: EventEmitter<Image> = new EventEmitter();
  @Output() createImage: EventEmitter<null> = new EventEmitter();
  @Output() updateImage: EventEmitter<Image> = new EventEmitter();
  @Output() slide: EventEmitter<{ event: NgbSlideEvent; index: number }> =
    new EventEmitter();
  @Output() slideEnd: EventEmitter<{ event: NgbSlideEvent; index: number }> =
    new EventEmitter();

  onSlide(event: NgbSlideEvent) {
    const slideIndexStr: string | undefined = event.current.split('-').pop();
    if (slideIndexStr == null) {
      throw `ImageCarousel - Image with id '${event.current}' does not match the expected pattern of 'imageIndex-<number>'!`;
    }

    const nextSlideIndex: number = parseInt(slideIndexStr);

    this.slide.emit({ event, index: nextSlideIndex });
  }

  onSlideEnd(event: NgbSlideEvent) {
    this.slide.emit({ event, index: this.currentSlideIndex() });
  }

  onImageCreate() {
    if (!this.canCreate()) {
      return;
    }

    this.createImage.emit();
  }

  onImageUpdate() {
    if (!this.canUpdate()) {
      return;
    }

    const image = this.images()[this.currentSlideIndex()];
    this.updateImage.emit(image);
  }

  onImageDelete() {
    if (!this.canDelete()) {
      return;
    }

    const image = this.images()[this.currentSlideIndex()];
    this.deleteImage.emit(image);
  }
}
