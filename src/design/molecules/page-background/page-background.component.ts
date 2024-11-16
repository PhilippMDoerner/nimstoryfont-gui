import {
  Component,
  computed,
  ElementRef,
  input,
  ViewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { animateElement } from 'src/app/_functions/animate';

@Component({
  selector: 'app-page-background',
  templateUrl: './page-background.component.html',
  styleUrls: ['./page-background.component.scss'],
  standalone: true,
  imports: [],
})
export class PageBackgroundComponent {
  defaultImageUrl = '/assets/default_images/background_default.webp';

  imageUrl = input<string>();
  serverUrl = input.required<string>();

  currentImageUrl = computed(() => {
    const newPartialImageUrl = this.imageUrl() ?? this.defaultImageUrl;
    return `${this.serverUrl()}${newPartialImageUrl}`;
  });

  currentImageUrlChanged$ = toObservable(this.currentImageUrl);

  @ViewChild('backgroundImage') backgroundImage!: ElementRef;

  constructor() {
    this.currentImageUrlChanged$
      .pipe(takeUntilDestroyed())
      .subscribe(async () => await this.updateCurrentImage());
  }

  async updateCurrentImage(): Promise<void> {
    await this.animateBackgroundImage('fadeIn');
  }

  async animateBackgroundImage(animation: string): Promise<any> {
    if (this.backgroundImage == null) return;

    return animateElement(this.backgroundImage.nativeElement, animation);
  }
}
