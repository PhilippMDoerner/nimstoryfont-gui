import { Component, Input, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { SidebarOption } from '../../molecules';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  @Input() foundArticles!: OverviewItem[];
  @Input() emptySearchSubtitle!: string;
  @Input() searchString!: string;
  @Input() campaignName!: string;
  
  filteredArticles!: OverviewItem[];
  homeUrl!: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    this.homeUrl = this.routingService.getRoutePath(
      'home',
      {campaign: this.campaignName},
    );
    
    this.filteredArticles = this.foundArticles;
  }
  
  onCategorySelect(allCategories: SidebarOption[]){
    const activeCategoryLabels: Set<string> = allCategories
      .filter(category => category.active)
      .map(category => category.label.toLowerCase())
      .reduce((accumulatorSet, currentValue) => accumulatorSet.add(currentValue), new Set<string>());
      
    const hasActiveCategories = activeCategoryLabels.size > 0;
    if(!hasActiveCategories){
      this.filteredArticles = this.foundArticles;
      return;
    }
      
    this.filteredArticles = this.foundArticles.filter(
      article => activeCategoryLabels.has(article.article_type.toLowerCase())
    );
  }
}
