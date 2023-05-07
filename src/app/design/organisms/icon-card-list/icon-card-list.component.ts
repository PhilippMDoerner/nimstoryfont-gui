import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IconCardEntry } from '../_model/icon-card-list';

@Component({
  selector: 'app-icon-card-list',
  templateUrl: './icon-card-list.component.html',
  styleUrls: ['./icon-card-list.component.scss']
})
export class IconCardListComponent implements OnInit, OnChanges{
  PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD: number = 400;
  
  @Input() articles!: IconCardEntry[];
  
  @Output() reachEndOfList: EventEmitter<number> = new EventEmitter();
  
  displayedArticles: IconCardEntry[] = [];
  isLoading: boolean = false;
  canLoadMore: boolean = true;
  pageNumber: number = 0;
  
  ngOnInit(): void {
    console.log(this);
    
    this.displayedArticles = this.articles;
  }
  
  ngOnChanges(): void {
    console.log("change");
    this.isLoading = false;
    const hasNewArticles = this.articles.length > 0;
    if(!hasNewArticles){
      this.canLoadMore = false;
      return;
    }
    
    this.displayedArticles = this.displayedArticles.concat(this.articles);
  }
  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isNearPageEnd()) {
      this.triggerNextPageLoad();
    }
  }
  
  triggerNextPageLoad(): void {
    const canLoadNextPage = !this.isLoading && this.articles != null && this.canLoadMore;
    if (!canLoadNextPage){
      return;
    }

    this.pageNumber += 1;
    this.isLoading = true;
    console.log("Loading", this.isLoading)
    this.reachEndOfList.emit(this.pageNumber);
  }
  
  isNearPageEnd(): boolean {
    const totalPageHeight: number = document.documentElement.scrollHeight;
    const visiblePageHeight: number = document.documentElement.clientHeight;
    const maxScrollHeight: number = totalPageHeight - visiblePageHeight;

    const scrolledHeight: number = window.pageYOffset;
    const pixelDistanceToPageBottom: number = maxScrollHeight - scrolledHeight;

    return pixelDistanceToPageBottom < this.PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD;
  }
}
