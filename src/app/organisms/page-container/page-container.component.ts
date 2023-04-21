import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements AfterViewInit{
  @Input() backgroundImageUrl?: string;
  @Input() imageServerUrl!: string;
  
  @ViewChild('pageElement') pageElement!: ElementRef;
  
  ngAfterViewInit(): void{
    if(!this.pageElement?.nativeElement) return;

    animateElement(this.pageElement.nativeElement, 'fadeIn');
  }
}
