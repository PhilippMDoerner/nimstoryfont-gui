import { Observable } from 'rxjs';
import { OverviewItem } from '../_models/overview';

export interface CampaignService<T> extends CRUDService<T> {
  loadCampaignList(campaignName: string): Observable<OverviewItem[]>;
  loadCampaignDetailList(campaignName: string): Observable<T[]>;
  loadReadByParam(campaignName: string, params: any): Observable<T>;
}

export interface CRUDService<T> extends CUDService<T> {
  loadRead(pk: number): Observable<T>;
  loadList(): Observable<T[]>;
}

export interface CUDService<T> extends CreateDeleteService<T> {
  patch(pk: number, data: Partial<T>): Observable<T>;
  doUpdate(pk: number, data: T): Observable<T>;
}

export interface CreateDeleteService<T> {
  doCreate(data: any): Observable<T>;
  delete(pk: number): Observable<any>;
}
