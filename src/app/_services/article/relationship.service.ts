import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ArticleNode,
  NodeLink,
  NodeLinkRaw,
  NodeMap,
} from 'src/app/_models/graph';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class RelationshipService extends BaseService<NodeLinkRaw, NodeLink> {
  constructor(http: HttpClient) {
    super(http, 'relationship');
  }

  getNodeMap(campaign: string): Observable<NodeMap> {
    return this.http
      .get<any>(`${this.apiUrl}/nodeMap/${campaign}/`)
      .pipe(map((resp) => this.parseNodeMap(resp)));
  }

  private parseNodeMap(nodeMap: {
    nodes: ArticleNode[];
    links: any[];
  }): NodeMap {
    const nodes = nodeMap.nodes;
    const links: NodeLink[] = nodeMap.links
      .map((link: any): NodeLink | undefined => this.parseLink(link, nodes))
      .filter((x) => x != null);

    return {
      nodes,
      links,
    };
  }

  parseLink(link: any, nodes: ArticleNode[]): NodeLink | undefined {
    const sourceNode = nodes.find((node) => node.guid === link.sourceGuid);
    const targetNode = nodes.find((node) => node.guid === link.targetGuid);
    if (!sourceNode || !targetNode) return undefined;
    return {
      source: sourceNode,
      target: targetNode,
      label: link.label,
      weight: link.weight,
      linkKind: link['linkKind'],
      id: link.id,
      color: link.color,
      icon: link.icon,
    };
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
