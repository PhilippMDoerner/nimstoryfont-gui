import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { OverviewItem } from 'src/app/_models/overview';
import { CharacterService } from 'src/app/_services/article/character.service';
import { CreatureService } from 'src/app/_services/article/creature.service';
import { DiaryentryService } from 'src/app/_services/article/diaryentry.service';
import { ItemService } from 'src/app/_services/article/item.service';
import { LocationService } from 'src/app/_services/article/location.service';
import { OrganizationService } from 'src/app/_services/article/organization.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { GeneralOverviewType } from 'src/design/templates/_models/generalOverviewType';
import { environment } from 'src/environments/environment';
import { filterNil } from 'src/utils/rxjs-operators';
import { TemplatesModule } from '../../../../design/templates/templates.module';

@Component({
  selector: 'app-general-overview-page',
  standalone: true,
  imports: [TemplatesModule, AsyncPipe],
  templateUrl: './general-overview-page.component.html',
  styleUrl: './general-overview-page.component.scss',
})
export class GeneralOverviewPageComponent {
  private OVERVIEW_ENTRIES_MAP: {
    [key in GeneralOverviewType]: Observable<OverviewItem[] | undefined>;
  } = {
    CHARACTER: inject(CharacterService).campaignList.data$,
    CREATURE: inject(CreatureService).campaignList.data$,
    DIARYENTRY: inject(DiaryentryService).campaignList.data$,
    ITEM: inject(ItemService).campaignList.data$,
    LOCATION: inject(LocationService).campaignList.data$,
    ORGANIZATION: inject(OrganizationService).campaignList.data$,
  };

  serverUrl = environment.backendDomain;

  campaignName$ = this.paramsService.campaignNameParam$;
  canCreate$ = this.campaignName$.pipe(
    filterNil(),
    switchMap((name) => this.tokenService.isCampaignAdmin(name)),
  );
  overviewType$ = this.route.data.pipe(
    map((data) => data['overviewType'] as GeneralOverviewType),
  );
  entries$ = this.overviewType$.pipe(
    switchMap((typ) => this.OVERVIEW_ENTRIES_MAP[typ]),
  );

  constructor(
    private paramsService: GlobalUrlParamsService,
    private tokenService: TokenService,
    private route: ActivatedRoute,
  ) {}
}
