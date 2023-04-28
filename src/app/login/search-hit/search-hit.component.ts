import { Component, Input } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';

@Component({
  selector: 'app-search-hit',
  templateUrl: './search-hit.component.html',
  styleUrls: ['./search-hit.component.scss']
})
export class SearchHitComponent {
  @Input() article!: OverviewItem;
}
