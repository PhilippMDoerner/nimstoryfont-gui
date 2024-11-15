import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GlobalStore } from 'src/app/global.store';
import { SearchComponent } from '../../../../design/templates/search/search.component';
import { SearchPageStore } from './search-page.store';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [SearchComponent, AsyncPipe],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPageComponent {
  store = inject(SearchPageStore);
  globalStore = inject(GlobalStore);
  route = inject(ActivatedRoute);
  searchString$ = this.route.params.pipe(
    map((params) => params['searchString'] as string | undefined),
  );
}
