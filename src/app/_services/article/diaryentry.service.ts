import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DiaryEntry, DiaryEntryRaw } from 'src/app/_models/diaryentry';
import { OverviewItem } from 'src/app/_models/overview';
import { trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class DiaryentryService extends BaseService<DiaryEntryRaw, DiaryEntry> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'diaryentry');
  }

  override loadReadByParam(
    campaign: string,
    params: {
      isMainSession: number | string;
      sessionNumber: number | string;
      authorName: string;
    },
  ) {
    const url = `${this.baseUrl}/${campaign}/${params.sessionNumber}/${params.isMainSession}/${params.authorName}/`;
    const entry$ = this.http
      .get<DiaryEntry>(url)
      .pipe(map((diaryEntry) => this.parseDiaryEntry(diaryEntry)));

    trackQuery(entry$, this.read);
  }

  private parseDiaryEntry(entry: any): DiaryEntry {
    return {
      ...entry,
      author: entry?.author_details?.pk,
      session: entry?.session_details?.pk,
    };
  }

  override parseEntity(data: any): DiaryEntry {
    return {
      ...data,
      author: data?.author_details?.pk,
      session: data?.session_details?.pk,
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
    const sessionNumber = data.session_details.session_number;
    const isMainSession = data.session_details.is_main_session_int;
    const authorName = data.author_details.name;

    return () =>
      this.routingService.getRoutePath('diaryentry', {
        sessionNumber,
        isMainSession,
        authorName,
        campaign: campaignName,
      });
  }
}
