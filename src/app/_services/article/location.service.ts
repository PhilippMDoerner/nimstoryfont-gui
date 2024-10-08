import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Location, LocationRaw } from 'src/app/_models/location';
import { OverviewItem } from 'src/app/_models/overview';
import { log } from 'src/utils/logging';
import { BaseService, ReadByNameParams } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class LocationService extends BaseService<LocationRaw, Location> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'location');
  }

  override loadReadByParam(
    campaign: string,
    params: { name: string; parentLocationName: string },
  ) {
    const _params: ReadByNameParams = {
      campaign,
      params: {
        name: params.name,
        parentLocationName: params.parentLocationName,
      },
    };
    this.readByParamTrigger$.next(_params);
  }

  protected override _loadReadByParam(
    campaign: string,
    params: { name: string; parentLocationName: string },
  ): Observable<Location> {
    log(this._loadReadByParam.name, { campaign, params });
    const url = `${this.baseUrl}/${campaign}/${params.parentLocationName}/${params.name}/`;
    return this.http
      .get<Location>(url)
      .pipe(map((data) => this.parseEntity(data)));
  }

  override parseEntity(data: any): Location {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
      getAbsoluteRouterUrlForParentLocation:
        this.generateParentLocationUrlCallback(data),
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
    const locationName = data.name;
    const parentLocationName = data.parent_location_details.name ?? 'NONE';

    return () =>
      this.routingService.getRoutePath('location', {
        name: locationName,
        parent_name: parentLocationName,
        campaign: campaignName,
      });
  }

  private generateParentLocationUrlCallback(data: any) {
    const hasParentLocation = data.parent_location_details != null;
    if (!hasParentLocation) {
      return null;
    }

    const campaignName = data.campaign_details.name;
    const parentLocationName = data.parent_location_details.name;
    const grandParentLocationName =
      data.parent_location_details.parent_location ?? 'NONE';
    return () =>
      this.routingService.getRoutePath('location', {
        name: parentLocationName,
        parent_name: grandParentLocationName,
        campaign: campaignName,
      });
  }
}
