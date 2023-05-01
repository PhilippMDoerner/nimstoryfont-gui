import { Observable } from "rxjs";

export interface CampaignService<T> extends CUDService<T>{
  list(): Observable<T[]>;
  campaignList(campaignName: string): Observable<T[]>;
  campaignDetailList(campaignName: string): Observable<T[]>;
  readByParam(campaignName: string, params: any): Observable<T>;
  read(pk: number): Observable<T>;
}

export interface CUDService<T> extends CreateDeleteService<T>{
  patch(pk: number, data: Partial<T>): Observable<T>;
  update(pk: number, data: T): Observable<T>;
} 

export interface CreateDeleteService<T>{
  create(data: any): Observable<T>;
  delete(pk: number): Observable<any>;
}