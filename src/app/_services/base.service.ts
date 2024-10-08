import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { log } from 'src/utils/logging';
import { createRequestPipeline, mergeRequestPipelines } from 'src/utils/query';
import { debugLog } from 'src/utils/rxjs-operators';
import { OverviewItem } from '../_models/overview';

export type ListParams<T> = {
  campaign: string;
  sortProperty?: keyof T;
};

export type ReadByNameParams = {
  campaign: string;
  params: { name: string; [key: string]: unknown };
};

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<Raw, Detail> {
  public apiUrl: string = environment.apiUrl;
  public baseUrl: string;
  protected listTrigger$ = new Subject<void>();
  public list = createRequestPipeline(this.listTrigger$.asObservable(), () =>
    this._loadList(),
  );

  protected campaignListTrigger$ = new Subject<ListParams<OverviewItem>>();
  public campaignList = createRequestPipeline(
    this.campaignListTrigger$.asObservable(),
    (params) => this._loadCampaignList(params.campaign, params.sortProperty),
  );

  protected campaignDetailListTrigger$ = new Subject<ListParams<Detail>>();
  public campaignDetailList = createRequestPipeline(
    this.campaignDetailListTrigger$.asObservable(),
    (params) =>
      this._loadCampaignDetailList(params.campaign, params.sortProperty),
  );

  protected createTrigger$ = new Subject<any>();
  public create = createRequestPipeline(
    this.createTrigger$.asObservable(),
    (data) => this._runCreate(data),
  );

  protected updateTrigger$ = new Subject<{
    pk: number;
    data: Raw & Record<'pk', number>;
  }>();
  public update = createRequestPipeline(
    this.updateTrigger$.asObservable(),
    (params) => this._runUpdate(params.pk, params.data),
  );

  protected readTrigger$ = new Subject<{ pk: number }>();
  protected _read = createRequestPipeline(
    this.readTrigger$.asObservable(),
    (params) => this._loadRead(params.pk),
  );

  protected readByParamTrigger$ = new Subject<ReadByNameParams>();
  protected _readByParams = createRequestPipeline(
    this.readByParamTrigger$.asObservable(),
    ({ params, campaign }) => this._loadReadByParam(campaign, params),
  );

  public read = mergeRequestPipelines(this._read, this._readByParams);

  protected deleteTrigger$ = new Subject<{ pk: number }>();
  public delete = createRequestPipeline(
    this.deleteTrigger$.asObservable(),
    (params) => this._runDelete(params.pk),
  );

  protected patchTrigger$ = new Subject<{ pk: number; data: Partial<Raw> }>();
  public patch = createRequestPipeline(
    this.patchTrigger$.asObservable(),
    ({ pk, data }) => this._runPatch(pk, data),
  );

  constructor(
    public http: HttpClient,
    baseUrl: string,
  ) {
    const apiUrl = environment.apiUrl;
    this.baseUrl = `${apiUrl}/${baseUrl}`;
  }

  /**
   * Sends a GET request for a list of all entries in the database.
   * May be either overview-serialized or a detail-serialized, depending on the type.
   * NOTE: May be either expensive for performance or not implemented. Always check before using if it works well.
   */
  loadList(): void {
    this.listTrigger$.next();
  }

  protected _loadList(): Observable<Detail[]> {
    const debugSymbol = this.loadList.name;
    return this.http.get<Detail[]>(`${this.baseUrl}/`).pipe(
      map((entries) => entries.map((entry) => this.parseEntity(entry))),
      debugLog(debugSymbol),
    );
  }

  /**
   * Sends a GET request for an overview list of all entries of the campaign with the given name.
   */
  loadCampaignList(campaign: string, sortProperty?: keyof OverviewItem): void {
    this.campaignListTrigger$.next({ campaign, sortProperty });
  }

  protected _loadCampaignList(
    campaign: string,
    sortProperty?: keyof OverviewItem,
  ): Observable<OverviewItem[]> {
    return this.http
      .get<OverviewItem[]>(`${this.baseUrl}/${campaign}/overview/`)
      .pipe(
        map((entries) => {
          const entities = entries.map((entry) =>
            this.parseOverviewEntity(entry),
          );
          if (sortProperty) {
            return this.sortList(entities, sortProperty);
          } else {
            return entities;
          }
        }),
        debugLog(this.loadCampaignList.name),
      );
  }

  /**
   * Sends a GET request for a detailed list of all entries of the campaign with the given name.
   * NOTE: This is a detailed list filling all fields for every entry as far as available.
   * This may be expensive. Prefer campaignList if possible.
   */
  loadCampaignDetailList(campaign: string, sortProperty?: keyof Detail): void {
    log(this.loadCampaignDetailList.name, {
      baseUrl: this.baseUrl,
      campaign,
      sortProperty,
    });
    this.campaignDetailListTrigger$.next({ campaign, sortProperty });
  }

  protected _loadCampaignDetailList(
    campaign: string,
    sortProperty?: keyof Detail,
  ): Observable<Detail[]> {
    return this.http.get<Detail[]>(`${this.baseUrl}/${campaign}/`).pipe(
      map((entries) => {
        const entities = entries.map((entry) => this.parseEntity(entry));
        if (sortProperty) {
          return this.sortList(entities, sortProperty);
        } else {
          return entities;
        }
      }),
      debugLog(this.loadCampaignDetailList.name),
    );
  }

  /**
   * Sends a POST request for the specified data
   */
  runCreate(data: any): void {
    log(this.runCreate.name, { baseUrl: this.baseUrl, data });
    this.createTrigger$.next(data);
  }

  protected _runCreate(data: any): Observable<Detail> {
    return this.http.post<Detail>(`${this.baseUrl}/`, data).pipe(
      map((entry) => this.parseEntity(entry)),
      debugLog(this.runCreate.name),
    );
  }

  /**
   * Sends a PUT request for the entry with the given pk and the specified data
   */
  runUpdate(pk: number, data: Raw & Record<'pk', number>): void {
    log(this.runUpdate.name, { baseUrl: this.baseUrl, pk, data });
    this.updateTrigger$.next({ pk, data });
  }

  protected _runUpdate(
    pk: number,
    data: Raw & Record<'pk', number>,
  ): Observable<Detail> {
    return this.http.put<Detail>(`${this.baseUrl}/pk/${pk}/`, data).pipe(
      map((entry) => this.parseEntity(entry)),
      debugLog(this.runUpdate.name),
    );
  }
  /**
   * Sends a GET request for the entry with the given pk
   */
  loadRead(pk: number): void {
    log(this.loadRead.name, { baseUrl: this.baseUrl, pk });
    this.readTrigger$.next({ pk });
  }

  protected _loadRead(pk: number): Observable<Detail> {
    return this.http.get<Detail>(`${this.baseUrl}/pk/${pk}/`).pipe(
      map((entry) => this.parseEntity(entry)),
      debugLog(this.loadRead.name),
    );
  }

  /**
   * @description Allows you to send a read query based on a param, e.g. "name", assuming the backend is set up for it.
   * The targetted URL will be "${baseURL of API Endpoint}/param"
   * @param param
   * @returns The data from that endpoint by the service
   */
  loadReadByParam(campaign: string, params: { name: string }): void {
    log(this.loadReadByParam.name, { baseUrl: this.baseUrl, params });

    if (typeof params.name !== 'string') {
      console.error('The params you used in the service: ', params);
      throw `Invalid params exception. You tried to use the base readByParams of GenericService with a parameter 
        object without the "name" attribute. This indicates your call is more complex than 
        this base implementation is useful for. Overwrite readByParam in the service that inherits from  
        GenericObjectService and implement the function yourself`;
    }

    this.readByParamTrigger$.next({ campaign, params });
  }

  protected _loadReadByParam(
    campaign: string,
    params: { name: string },
  ): Observable<Detail> {
    return this.http
      .get<Detail>(`${this.baseUrl}/${campaign}/${params.name}/`)
      .pipe(
        map((entry) => this.parseEntity(entry)),
        debugLog(this.loadReadByParam.name),
      );
  }

  /**
   * Sends a DELETE request for the entry with the specified primary key
   */
  runDelete(pk: number): void {
    log(this.runDelete.name, { baseUrl: this.baseUrl, pk });
    this.deleteTrigger$.next({ pk });
  }

  protected _runDelete(pk: number): Observable<void> {
    return this.http.delete(`${this.baseUrl}/pk/${pk}/`).pipe(
      debugLog(this.runDelete.name),
      map(() => void 0),
    );
  }

  /**
   * Sends a PATCH request for the entry with the given pk and the specified data
   */
  runPatch(pk: number, data: Partial<Raw>): void {
    log(this.runPatch.name, { baseUrl: this.baseUrl, pk, data });
    this.patchTrigger$.next({ pk, data });
  }

  protected _runPatch(pk: number, data: Partial<Raw>): Observable<Detail> {
    return this.http.patch<Detail>(`${this.baseUrl}/pk/${pk}/`, data).pipe(
      map((entry) => this.parseEntity(entry)),
      debugLog(this.runPatch.name),
    );
  }

  abstract parseEntity(data: any): Detail;

  abstract parseOverviewEntity(data: any): OverviewItem;

  protected sortList<T>(entries: T[], sortProperty: keyof T): T[] {
    return entries.sort((a, b) => {
      const aVal = a[sortProperty];
      const bVal = b[sortProperty];
      if (aVal === bVal) return 0;
      if (aVal == null) return -1;
      if (bVal == null) return 1;

      return aVal > bVal ? 1 : -1;
    });
  }
}
