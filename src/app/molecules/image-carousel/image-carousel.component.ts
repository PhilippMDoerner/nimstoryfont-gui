import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '../_models/image';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {
  @Input() images!: Image[];
  @Input() serverUrl!: string;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canUpdate: boolean = false;
  
  @Output() deleteImage: EventEmitter<any> = new EventEmitter();
  @Output() createImage: EventEmitter<any> = new EventEmitter();
  @Output() updateImage: EventEmitter<any> = new EventEmitter();
  @Output() slide: EventEmitter<{event: NgbSlideEvent, index: number}> = new EventEmitter();
  @Output() slideEnd: EventEmitter<{event: NgbSlideEvent, index: number}> = new EventEmitter();
  
  currentSlideIndex: number = 0;
  
  onSlide(event: NgbSlideEvent){
    const slideIndexStr: string | undefined = event.current.split('-').pop();
    if(slideIndexStr == null){
      throw `ImageCarousel - Image with id '${event.current}' does not match the expected pattern of 'imageIndex-<number>'!`; 
    }
    
    const slideIndex: number = parseInt(slideIndexStr);
    this.currentSlideIndex = slideIndex;
    
    this.slide.emit({event, index: this.currentSlideIndex});
  }
  
  onSlideEnd(event: NgbSlideEvent){
    this.slide.emit({event, index: this.currentSlideIndex});
  }
  
  onImageCreate(){
    if(!this.canCreate){
      return;
    };
    
    
  }
  
  onImageUpdate(){
    if(!this.canUpdate){
      return;
    };
    
  }
  
  onImageDelete(){
    if(!this.canDelete){
      return;
    };
    
  }
}
