import { Observable } from "rxjs";
import { OverviewItem } from "../_models/overview";

export interface CampaignService<T> extends CRUDService<T>{
  campaignList(campaignName: string): Observable<OverviewItem[]>;
  campaignDetailList(campaignName: string): Observable<T[]>;
  readByParam(campaignName: string, params: any): Observable<T>;
}

export interface CRUDService<T> extends CUDService<T> {
  read(pk: number): Observable<T>;
  list(): Observable<T[]>;
}

export interface CUDService<T> extends CreateDeleteService<T>{
  patch(pk: number, data: Partial<T>): Observable<T>;
  update(pk: number, data: T): Observable<T>;
} 

export interface CreateDeleteService<T>{
  create(data: any): Observable<T>;
  delete(pk: number): Observable<any>;
}