import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote, QuoteRaw } from 'src/app/_models/quote';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService extends BaseService<QuoteRaw, Quote> {
  constructor(http: HttpClient) {
    super(http, 'quote');
  }

  randomQuote$ = createRequestSubjects<Quote>();
  characterQuotes$ = createRequestSubjects<Quote[]>();

  loadRandomQuote(campaign: string, character_name: string) {
    const entry$ = this.http
      .get<any>(`${this.baseUrl}/${campaign}/${character_name}/random/`)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.randomQuote$);
  }

  loadAllCharacterQuotes(campaign: string, character_name: string) {
    const entries$ = this.http
      .get<any[]>(`${this.baseUrl}/${campaign}/${character_name}/`)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.characterQuotes$);
  }

  override parseEntity(data: any): Quote {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    throw 'Overview types are not implemented for Quotes';
  }
}
