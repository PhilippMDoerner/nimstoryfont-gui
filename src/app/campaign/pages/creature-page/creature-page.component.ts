import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { Creature } from 'src/app/_models/creature';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CreatureComponent } from 'src/design/templates';
import { environment } from 'src/environments/environment';
import { CreaturePageStore } from './creature-page.store';

@Component({
  selector: 'app-creature-page',
  standalone: true,
  imports: [CreatureComponent],
  templateUrl: './creature-page.component.html',
  styleUrl: './creature-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreaturePageComponent {
  serverUrl = environment.backendDomain;
  globalStore = inject(GlobalStore);
  store = inject(CreaturePageStore);
  private routingService = inject(RoutingService);

  constructor() {
    this.routeToOverviewOnMissingArticle();
  }

  deleteCreature(creature: Creature) {
    this.store.deleteCreature(creature);
    this.routingService.routeToPath('creature-overview', {
      campaign: this.globalStore.campaignName(),
    });
  }

  private routeToOverviewOnMissingArticle() {
    effect(() => {
      const creatureDoesNotExist = this.store.creatureError()?.status === 404;
      if (creatureDoesNotExist) {
        this.routingService.routeToPath('creature-overview', {
          campaign: this.globalStore.campaignName(),
        });
      }
    });
  }
}
