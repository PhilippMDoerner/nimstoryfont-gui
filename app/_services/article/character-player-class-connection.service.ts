import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { CharacterPlayerClassConnection } from '../../_models/playerclass';
import { BaseService } from '../base.service';
import { CreateDeleteService } from '../service.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterPlayerClassConnectionService extends BaseService<CharacterPlayerClassConnection> implements CreateDeleteService<CharacterPlayerClassConnection>{
  constructor(http: HttpClient) { 
    super(http, "characterplayerclassconnection"); 
  }
  
  parseEntity(data: any): CharacterPlayerClassConnection {
    return data;
  }
  
  parseOverviewEntity(data: any): OverviewItem {
    throw "CharacterPlayerClassConnection does not have an overview endpoint"
  }
}
