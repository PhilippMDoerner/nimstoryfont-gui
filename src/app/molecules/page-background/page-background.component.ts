import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { animateElement } from '../_functions/animate';

@Component({
  selector: 'app-page-background',
  templateUrl: './page-background.component.html',
  styleUrls: ['./page-background.component.scss']
})
export class PageBackgroundComponent {
  @Input() imageUrl?: string;
  @Input() serverUrl!: string;
  defaultImageUrl: string = '/assets/default_images/background_default.webp';
  currentImageUrl!: string;
  
  @ViewChild('backgroundImage') backgroundImage!: ElementRef;

  constructor() { }

  ngOnChanges(): void {
    const newPartialImageUrl = this.imageUrl ?? this.defaultImageUrl
    const fullImageUrl = `${this.serverUrl}${newPartialImageUrl}`;
    const hasImageChanged = fullImageUrl !== this.currentImageUrl;
    if(!hasImageChanged){
      return;
    }
    
    this.updateCurrentImage(fullImageUrl);
  }

  async updateCurrentImage(newUrl: string): Promise<void>{
    await this.animateBackgroundImage('fadeOut');

    this.currentImageUrl = newUrl;

    await this.animateBackgroundImage('fadeIn');
  }

  async animateBackgroundImage(animation: string): Promise<any>{
    if (this.backgroundImage == null) return;

    return animateElement(this.backgroundImage.nativeElement, animation);
  }
}
