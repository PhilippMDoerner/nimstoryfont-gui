import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Item } from 'src/app/_models/item';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { ItemPageStore } from './item-page.store';

@Component({
  selector: 'app-item-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {
  serverUrl = environment.backendDomain;
  globalStore = inject(GlobalStore);
  store = inject(ItemPageStore);
  routingService = inject(RoutingService);

  constructor() {
    this.routeToOverviewOnMissingArticle();
  }

  onItemDelete() {
    this.store.deleteItem(this.store.item()!.pk!);
    this.routingService.routeToPath('item-overview', {
      campaign: this.globalStore.campaignName(),
    });
  }

  onItemUpdate(newItem: Item) {
    this.store.updateItem(newItem);
  }

  private routeToOverviewOnMissingArticle() {
    effect(() => {
      const characterDoesNotExist = this.store.itemError()?.status === 404;
      if (characterDoesNotExist) {
        this.routingService.routeToPath('item-overview', {
          campaign: this.globalStore.campaignName(),
        });
      }
    });
  }
}
