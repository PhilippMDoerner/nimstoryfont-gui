import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutingService } from 'src/app/_services/routing.service';
import { PageContainerComponent } from 'src/app/design//organisms/page-container/page-container.component';
import { QuotesComponent } from 'src/app/design//organisms/quotes/quotes.component';
import { ButtonLinkComponent } from 'src/app/design/atoms/button-link/button-link.component';
import { GlobalStore } from 'src/app/global.store';
import { QuoteOverviewPageStore } from './quote-overview-page.store';

@Component({
  selector: 'app-quote-overview-page',
  imports: [
    QuotesComponent,
    PageContainerComponent,
    RouterLink,
    ButtonLinkComponent,
  ],
  templateUrl: './quote-overview-page.component.html',
  styleUrl: './quote-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class QuoteOverviewPageComponent {
  store = inject(QuoteOverviewPageStore);
  globalStore = inject(GlobalStore);

  routingService = inject(RoutingService);
  characterUrl = computed(() =>
    this.routingService.getRoutePath('character', {
      campaign: this.globalStore.campaignName(),
      name: this.store.character()?.name,
    }),
  );
}
