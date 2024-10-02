import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  EncounterConnection,
  EncounterConnectionRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class EncounterConnectionService extends BaseService<
  EncounterConnectionRaw,
  EncounterConnection
> {
  constructor(http: HttpClient) {
    super(http, 'encounterconnection');
  }

  parseEntity(data: any): EncounterConnection {
    return data;
  }

  parseOverviewEntity(data: any): OverviewItem {
    throw 'CharacterPlayerClassConnection does not have an overview endpoint';
  }
}
