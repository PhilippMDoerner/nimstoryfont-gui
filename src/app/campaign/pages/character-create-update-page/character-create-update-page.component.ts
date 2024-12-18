import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, skip, take } from 'rxjs';
import { CharacterDetails, CharacterRaw } from 'src/app/_models/character';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CreateUpdateState } from 'src/design/templates/_models/create-update-states';
import { CharacterCreateUpdateComponent } from 'src/design/templates/character-create-update/character-create-update.component';
import { CharacterCreateUpdateStore } from './character-create-update-page.store';

@Component({
  selector: 'app-character-create-update-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CharacterCreateUpdateComponent],
  providers: [],
  templateUrl: './character-create-update-page.component.html',
  styleUrl: './character-create-update-page.component.scss',
})
export class CharacterUpdatePageComponent {
  readonly globalStore = inject(GlobalStore);
  readonly store = inject(CharacterCreateUpdateStore);
  readonly route = inject(ActivatedRoute);
  readonly routingService = inject(RoutingService);

  routeUrlSegments = toSignal(this.route.url);
  state = computed<CreateUpdateState>(() => {
    const pathSegments = this.routeUrlSegments()?.map(
      (segment) => segment.path,
    );
    const isUpdatePage = pathSegments?.includes('update');
    if (!isUpdatePage) {
      return 'CREATE';
    }

    const isOutdatedUpdate = this.store.serverModel() != null;
    if (isOutdatedUpdate) {
      return 'OUTDATED_UPDATE';
    } else {
      return 'UPDATE';
    }
  });

  userModel = computed(() => {
    switch (this.state()) {
      case 'CREATE':
        return {
          campaign_id: this.globalStore.currentCampaign()?.pk,
        } as Partial<CharacterRaw>;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return this.store.character();
    }
  });

  private characterQueryState$ = toObservable(this.store.characterQueryState);

  onCancel() {
    switch (this.state()) {
      case 'CREATE':
        this.routingService.routeToPath('character-overview', {
          campaign: this.globalStore.campaignName(),
        });
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.routeToCharacter(this.store.character()!);
        break;
    }
  }

  onUpdateSubmit(newCharacter: CharacterDetails) {
    this.store.updateCharacter(newCharacter);

    this.characterQueryState$
      .pipe(
        skip(1),
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() => this.routeToCharacter(newCharacter));
  }

  onCreateSubmit(newCharacter: CharacterDetails) {
    this.characterQueryState$
      .pipe(
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() => this.routeToCharacter(newCharacter));
    this.store.createCharacter(newCharacter);
  }

  private routeToCharacter(character: CharacterDetails) {
    this.routingService.routeToPath('character', {
      campaign: this.globalStore.campaignName(),
      name: character.name,
    });
  }
}
