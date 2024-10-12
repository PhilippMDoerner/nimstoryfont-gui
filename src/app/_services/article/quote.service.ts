import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { OverviewItem } from 'src/app/_models/overview';
import { Quote, QuoteRaw } from 'src/app/_models/quote';
import { createRequestPipeline, createRequestSubjects } from 'src/utils/query';
import { debugLog } from 'src/utils/rxjs-operators';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class QuoteService extends BaseService<QuoteRaw, Quote> {
  private randomQuoteTrigger$ = new Subject<{
    campaignName: string;
    characterName: string;
  }>();
  randomQuote = createRequestPipeline(
    this.randomQuoteTrigger$.asObservable(),
    ({ campaignName, characterName }) =>
      this._loadRandomQuote(campaignName, characterName),
  );

  private characterQuotesTrigger$ = new Subject<{
    campaignName: string;
    characterName: string;
  }>();
  characterQuotes = createRequestPipeline(
    this.characterQuotesTrigger$.asObservable(),
    ({ campaignName, characterName }) =>
      this._loadAllCharacterQuotes(campaignName, characterName),
  );

  constructor(http: HttpClient) {
    super(http, 'quote');
  }

  characterQuotes$ = createRequestSubjects<Quote[]>();

  loadRandomQuote(campaign: string, characterName: string) {
    this.randomQuoteTrigger$.next({
      campaignName: campaign,
      characterName: characterName,
    });
  }
  private _loadRandomQuote(campaign: string, character_name: string) {
    const debugSymbol = this.loadRandomQuote.name;

    return this.http
      .get<any>(`${this.baseUrl}/${campaign}/${character_name}/random/`)
      .pipe(
        map((entry) => this.parseEntity(entry)),
        debugLog(debugSymbol),
      );
  }

  public loadAllCharacterQuotes(campaign: string, character_name: string) {
    this.characterQuotesTrigger$.next({
      campaignName: campaign,
      characterName: character_name,
    });
  }

  private _loadAllCharacterQuotes(campaign: string, character_name: string) {
    const debugSymbol = this.loadAllCharacterQuotes.name;

    return this.http
      .get<any[]>(`${this.baseUrl}/${campaign}/${character_name}/`)
      .pipe(
        map((entries) => entries.map((entry) => this.parseEntity(entry))),
        debugLog(debugSymbol),
      );
  }

  override parseEntity(data: any): Quote {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    throw 'Overview types are not implemented for Quotes';
  }
}
