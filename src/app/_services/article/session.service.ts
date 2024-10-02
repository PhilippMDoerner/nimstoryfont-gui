import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { Session, SessionRaw } from 'src/app/_models/session';
import { trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class SessionService extends BaseService<SessionRaw, Session> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'session');
  }

  loadSessions(sessionNumber: number, isMainSession: boolean | number) {
    if (typeof isMainSession === 'boolean')
      isMainSession = isMainSession ? 1 : 0;
    const entry$ = this.http.get<Session>(
      `${this.baseUrl}/${sessionNumber}/${isMainSession}`,
    );

    trackQuery(entry$, this.read);
  }

  override parseEntity(data: any): Session {
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

    return () =>
      this.routingService.getRoutePath('sessions', {
        campaign: campaignName,
      });
  }
}
