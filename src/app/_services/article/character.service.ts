import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CharacterDetails, CharacterRaw } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService extends BaseService<
  CharacterRaw,
  CharacterDetails
> {
  constructor(
    public routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'character');
  }

  nonPlayerCharacters = createRequestSubjects<OverviewItem[]>();
  playerCharacters = createRequestSubjects<OverviewItem[]>();

  loadPlayerCharacters(campaign: string) {
    const url = `${this.baseUrl}/${campaign}/playercharacters/`;
    const entries$ = this.http
      .get<any[]>(url)
      .pipe(
        map((entries) =>
          entries.map((entry) => this.parseOverviewEntity(entry)),
        ),
      );

    trackQuery(entries$, this.playerCharacters);
  }

  loadNonPlayerCharacters(campaign: string) {
    const url = `${this.baseUrl}/${campaign}/nonplayercharacters/`;
    const entries$ = this.http
      .get<any[]>(url)
      .pipe(
        map((entries) =>
          entries.map((entry) => this.parseOverviewEntity(entry)),
        ),
      );
    trackQuery(entries$, this.nonPlayerCharacters);
  }

  override parseEntity(data: any): CharacterDetails {
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
    const characterName = data.name;

    return () =>
      this.routingService.getRoutePath('character', {
        name: characterName,
        campaign: campaignName,
      });
  }
}
