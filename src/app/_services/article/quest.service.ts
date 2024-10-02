import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { OverviewItem } from 'src/app/_models/overview';
import { Quest, QuestRaw } from 'src/app/_models/quest';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';
import { CharacterService } from './character.service';

@Injectable({
  providedIn: 'root',
})
export class QuestService extends BaseService<QuestRaw, Quest> {
  constructor(
    private routingService: RoutingService,
    private characterService: CharacterService,
    http: HttpClient,
  ) {
    super(http, 'quest');
  }

  questStates$ = createRequestSubjects<string[]>();
  questTakers$ = createRequestSubjects<OverviewItem[]>();

  loadQuestStates() {
    const entries$ = this.http.get<string[]>(`${this.baseUrl}/states`);
    trackQuery(entries$, this.questStates$);
  }

  loadQuestTakers(campaign: string) {
    this.characterService.loadPlayerCharacters(campaign);
    const entries$ = this.characterService.playerCharacters.data.pipe(
      filter((characters) => characters != null),
      map((characters) => {
        const groupAsQuestTaker: OverviewItem = {
          name: 'Group',
          name_full: 'Group',
          pk: undefined,
          article_type: 'quest',
        } as OverviewItem;
        characters.unshift(groupAsQuestTaker);
        return characters;
      }),
    );

    trackQuery(entries$, this.questTakers$);
  }

  override parseEntity(data: any): Quest {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  override parseOverviewEntity(data: any): OverviewItem {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  private generateUrlCallback(data: any) {
    const campaignName = data.campaign_details.name;
    const questName = data.name;

    return () =>
      this.routingService.getRoutePath('quest', {
        name: questName,
        campaign: campaignName,
      });
  }
}
