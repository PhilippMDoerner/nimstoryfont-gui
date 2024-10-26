import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, skip, take } from 'rxjs';
import { CharacterDetails } from 'src/app/_models/character';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CreateUpdateState } from 'src/design/templates/_models/create-update-states';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { CharacterCreateUpdateStore } from './character-create-update-page.store';

@Component({
  selector: 'app-character-create-update-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TemplatesModule],
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

  private characterQueryState$ = toObservable(this.store.characterQueryState);

  addClass(classId: number | undefined) {
    this.store.addClass(classId as number);
  }

  removeClass(classId: number | undefined) {
    const connection = this.store
      .character()
      ?.player_class_connections?.find(
        (connection) => connection.player_class === classId,
      );
    this.store.removeClass(connection?.pk as number);
  }

  onCancel() {
    this.routeToCharacter(this.store.character()!);
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
    this.store.createCharacter(newCharacter);
    this.routeToCharacter(newCharacter);
  }

  private routeToCharacter(character: CharacterDetails) {
    this.routingService.routeToPath('character', {
      campaign: this.globalStore.campaignName(),
      name: character.name,
    });
  }
}
