import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DiaryEntryEncounterConnection } from 'src/app/_models/diaryentryEncounterConnection';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class DiaryentryEncounterConnectionService extends BaseService<
  DiaryEntryEncounterConnection,
  DiaryEntryEncounterConnection
> {
  constructor(http: HttpClient) {
    super(http, 'diaryentryencounterconnection');
  }

  parseEntity(data: any): DiaryEntryEncounterConnection {
    return data;
  }

  parseOverviewEntity(data: any): OverviewItem {
    throw 'CharacterPlayerClassConnection does not have an overview endpoint';
  }
}
