import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NodeLink, NodeLinkRaw } from 'src/app/_models/nodeMap';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class RelationshipService extends BaseService<NodeLinkRaw, NodeLink> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'creature');
  }

  override parseEntity(data: any): NodeLink {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    throw new Error('NodeLinks do not have an overview');
  }

  override campaignList(campaign: string): Observable<OverviewItem[]> {
    throw new Error('NodeLinks do not have an overview');
  }

  override campaignDetailList(campaign: string): Observable<NodeLink[]> {
    throw new Error('NodeLinks do not have an overview');
  }
}
