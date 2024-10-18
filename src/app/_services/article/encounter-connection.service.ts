import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EncounterConnection } from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';
import { CreateDeleteService } from '../service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class EncounterConnectionService
  extends BaseService<EncounterConnection, EncounterConnection>
  implements CreateDeleteService<EncounterConnection>
{
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
