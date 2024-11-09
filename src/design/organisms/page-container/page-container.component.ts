import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss'],
  standalone: true,
  imports: [],
})
export class PageContainerComponent implements AfterViewInit {
  @ViewChild('pageElement') pageElement!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.pageElement?.nativeElement) return;

    animateElement(this.pageElement.nativeElement, 'fadeIn');
  }
}
