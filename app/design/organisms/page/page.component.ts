import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { UserData } from 'src/app/_models/token';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() user!: UserData;
  @Input() campaign!: Campaign;
  @Input() serverUrl!: string;
  
  @ViewChild('sidebar') sidebarElement!: ElementRef;
  @ViewChild('content') contentElement!: ElementRef;
  
  startX: number = 0;
  currentX: number = 0;
  threshold: number = 50;
  sidebarWidth: number = 20*16;
  showSidebar: boolean = false;
  
  mobileWidth: number = 576;
  
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if(!this.isMobile()){
      return;
    }
    
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if(!this.isMobile()){
      return;
    }
    
    const currentX = event.touches[0].clientX;
    const distanceX = currentX - this.startX;

    if (distanceX > 0 && distanceX <= this.sidebarWidth) {
      this.slideRightViaMargin(distanceX);
    }
  }
  
  slideRightViaMargin(newMargin: number){    
    const element: HTMLElement = this.contentElement.nativeElement;
    element.style.marginLeft = `${newMargin}px`;
  }

  resetSlide(){
    const element: HTMLElement = this.contentElement.nativeElement;
    element.style.marginLeft = '';
  }
  
  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if(!this.isMobile()){
      return;
    }
    
    const currentX = event.changedTouches[0].clientX;
    const distanceX = currentX - this.startX;

    if (distanceX > this.threshold) {
      this.showSidebar = true;
    } else if (distanceX <= this.threshold) {
      this.showSidebar = false;
    }

    this.resetSlide();
    this.startX = 0;
  }
  
  isMobile(){
    return screen.width <= this.mobileWidth;
  }
}
