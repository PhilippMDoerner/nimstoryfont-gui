import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { SpellPlayerClassConnection } from 'src/app/_models/spell';
import { BaseService } from '../base.service';
import { CreateDeleteService } from '../service.interfaces';

@Injectable({
  providedIn: 'root',
})
export class SpellPlayerClassConnectionService
  extends BaseService<SpellPlayerClassConnection, SpellPlayerClassConnection>
  implements CreateDeleteService<SpellPlayerClassConnection>
{
  constructor(http: HttpClient) {
    super(http, 'spellclassconnection');
  }

  parseEntity(data: any): SpellPlayerClassConnection {
    return data;
  }

  parseOverviewEntity(data: any): OverviewItem {
    throw 'CharacterPlayerClassConnection does not have an overview endpoint';
  }
}
