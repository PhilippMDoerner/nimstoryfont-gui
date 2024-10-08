import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { convertSingleFileModelToFormData } from 'src/app/_functions/formDataConverter';
import { ExtendedMap, Map, MapRaw } from 'src/app/_models/map';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class MapService extends BaseService<MapRaw, ExtendedMap> {
  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'map');
  }

  override runCreate(mapData: MapRaw): void {
    const formData: FormData = convertSingleFileModelToFormData(
      mapData,
      'image',
    );
    this.createTrigger$.next(formData);
  }

  override runPatch(mapPk: number, mapData: Partial<MapRaw>) {
    const hasImageFile = mapData.image?.constructor.name === 'FileList';

    let formData: FormData | Partial<Map>;
    if (hasImageFile) {
      formData = convertSingleFileModelToFormData(mapData, 'image');
    } else {
      delete mapData.image;
      formData = mapData;
    }

    this.patchTrigger$.next({ pk: mapPk, data: formData as MapRaw });
  }

  override parseEntity(data: any): Map {
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
    const mapName = data.name;

    return () =>
      this.routingService.getRoutePath('map', {
        name: mapName,
        campaign: campaignName,
      });
  }
}
