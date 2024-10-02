import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import {
  Encounter,
  EncounterObject,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class EncounterService extends BaseService<EncounterRaw, Encounter> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'encounter');
  }

  diaryEntryEncounters = createRequestSubjects();
  createEncounter = createRequestSubjects();

  loadDiaryEntryEncounters(session_pk: number, authorName: string) {
    const url = `${this.baseUrl}/session/${session_pk}/${authorName}`;
    const entries$ = this.http
      .get<Encounter[]>(url)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.diaryEntryEncounters);
  }

  runCreateForDiaryentry(encounter: Partial<Encounter>) {
    const url = `${this.baseUrl}/`;
    const entries$ = this.http
      .post<any[]>(url, encounter)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.createEncounter);
  }

  swapEncounterOrder(
    campaign: string,
    encounter1_pk: number,
    encounter2_pk: number,
  ) {
    const url = `${this.baseUrl}/${campaign}/orderswap/`;
    const requestBody = {
      encounter1: encounter1_pk,
      encounter2: encounter2_pk,
    };

    const entries$ = this.http
      .patch<any[]>(url, requestBody)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.diaryEntryEncounters);
  }

  cutInsertEncounter(
    campaign: string,
    encounter: Encounter,
    newOrderIndex: number,
  ) {
    const url = `${this.baseUrl}/${campaign}/cutinsert/`;
    const requestBody = {
      encounter: encounter.pk,
      old_order_index: encounter.order_index,
      new_order_index: newOrderIndex,
    };

    const entries$ = this.http
      .patch<any[]>(url, requestBody)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.diaryEntryEncounters);
  }

  override parseEntity(data: any): Encounter {
    return new EncounterObject({
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    });
  }

  override parseOverviewEntity(data: any): OverviewItem {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  private generateUrlCallback(data: any) {
    const campaignName = data.campaign_details.name;
    const sessionNumber = data.diaryentry_details.session_number;
    const isMainSession = data.diaryentry_details.is_main_session;
    const authorName = data.diaryentry_details.author_name;
    const encounterTitle = data.title;

    return () =>
      this.routingService.getRoutePath('diaryentry-encounter', {
        sessionNumber,
        isMainSession,
        authorName,
        campaign: campaignName,
        encounterTitle,
      });
  }
}
