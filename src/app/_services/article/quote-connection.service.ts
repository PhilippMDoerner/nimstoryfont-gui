import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { QuoteConnection } from 'src/app/_models/quote';
import { BaseService } from '../base.service';
import { CreateDeleteService } from '../service.interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuoteConnectionService extends BaseService<QuoteConnection> implements CreateDeleteService<QuoteConnection> {
  constructor(http: HttpClient) { super(http, 'quoteconnection') }
  
  parseEntity(data: any): QuoteConnection {
    return data;
  }
  
  parseOverviewEntity(data: any): OverviewItem {
    throw "CharacterPlayerClassConnection does not have an overview endpoint"
  }
}
