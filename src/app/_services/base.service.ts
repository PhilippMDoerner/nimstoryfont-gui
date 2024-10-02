import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { OverviewItem } from '../_models/overview';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseService<Raw, Detail> {
  public apiUrl: string = environment.apiUrl;
  public baseUrl: string;
  list = createRequestSubjects<Detail[]>();
  campaignList = createRequestSubjects<OverviewItem[]>();
  campaignDetailList = createRequestSubjects<Detail[]>();
  create = createRequestSubjects<Detail>();
  read = createRequestSubjects<Detail>();
  update = createRequestSubjects<Detail>();
  delete = createRequestSubjects<unknown>();
  patch = createRequestSubjects<Detail>();

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
    const entries$ = this.http
      .get<Detail[]>(`${this.baseUrl}/`)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries$, this.list);
  }

  /**
   * Sends a GET request for an overview list of all entries of the campaign with the given name.
   */
  loadCampaignList(campaign: string, sortProperty?: keyof OverviewItem): void {
    let entries$ = this.http
      .get<OverviewItem[]>(`${this.baseUrl}/${campaign}/overview/`)
      .pipe(
        map((entries) =>
          entries.map((entry) => this.parseOverviewEntity(entry)),
        ),
      );

    trackQuery(entries$, this.campaignList);
  }

  /**
   * Sends a GET request for a detailed list of all entries of the campaign with the given name.
   * NOTE: This is a detailed list filling all fields for every entry as far as available.
   * This may be expensive. Prefer campaignList if possible.
   */
  loadCampaignDetailList(campaign: string): void {
    const entries = this.http
      .get<Detail[]>(`${this.baseUrl}/${campaign}/`)
      .pipe(map((entries) => entries.map((entry) => this.parseEntity(entry))));

    trackQuery(entries, this.campaignDetailList);
  }

  /**
   * Sends a POST request for the specified data
   */
  runCreate(data: any): void {
    const entry$ = this.http
      .post<Detail>(`${this.baseUrl}/`, data)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.create);
  }

  /**
   * Sends a PUT request for the entry with the given pk and the specified data
   */
  runUpdate(pk: number, data: Raw): void {
    const entry$ = this.http
      .put<Detail>(`${this.baseUrl}/pk/${pk}/`, data)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.update);
  }

  /**
   * Sends a GET request for the entry with the given pk
   */
  loadRead(pk: number): void {
    const entry$ = this.http
      .get<Detail>(`${this.baseUrl}/pk/${pk}/`)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.read);
  }

  /**
   * @description Allows you to send a read query based on a param, e.g. "name", assuming the backend is set up for it.
   * The targetted URL will be "${baseURL of API Endpoint}/param"
   * @param param
   * @returns The data from that endpoint by the service
   */
  loadReadByParam(
    campaign: string,
    params: { name?: string; [key: PropertyKey]: unknown },
  ): void {
    if (typeof params.name !== 'string') {
      console.error('The params you used in the service: ', params);
      throw `Invalid params exception. You tried to use the base readByParams of GenericService with a parameter 
        object without the "name" attribute. This indicates your call is more complex than 
        this base implementation is useful for. Overwrite readByParam in the service that inherits from  
        GenericObjectService and implement the function yourself`;
    }

    const entry$ = this.http
      .get<Detail>(`${this.baseUrl}/${campaign}/${params.name}/`)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.read);
  }

  /**
   * Sends a DELETE request for the entry with the specified primary key
   */
  runDelete(pk: number): void {
    const entry$ = this.http
      .delete(`${this.baseUrl}/pk/${pk}/`)
      .pipe(map(() => void 0));

    trackQuery(entry$, this.delete);
  }

  /**
   * Sends a PATCH request for the entry with the given pk and the specified data
   */
  runPatch(pk: number, data: Partial<Raw>): void {
    const entry$ = this.http
      .patch<Detail>(`${this.baseUrl}/pk/${pk}/`, data)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entry$, this.patch);
  }

  abstract parseEntity(data: any): Detail;

  abstract parseOverviewEntity(data: any): OverviewItem;
}
