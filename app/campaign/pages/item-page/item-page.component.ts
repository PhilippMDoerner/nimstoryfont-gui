import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';
import { Item } from 'src/app/_models/item';
import { RoutingService } from 'src/app/_services/routing.service';
import { ItemComponent } from 'src/app/design/templates/item/item.component';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { ItemPageStore } from './item-page.store';

@Component({
  selector: 'app-item-page',
  imports: [ItemComponent],
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemPageComponent {
  serverUrl = environment.backendDomain;
  globalStore = inject(GlobalStore);
  store = inject(ItemPageStore);
  routingService = inject(RoutingService);

  itemDeleteState$ = toObservable(this.store.itemDeleteState);
  item$ = toObservable(this.store.item);

  constructor() {
    this.routeToOverviewOnMissingArticle();
  }

  onItemDelete() {
    this.store.deleteItem(this.store.item()!.pk!);
    this.itemDeleteState$
      .pipe(
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() => {
        this.routingService.routeToPath('item-overview', {
          campaign: this.globalStore.campaignName(),
        });
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
