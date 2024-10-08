import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map as switchMap } from 'rxjs/operators';
import {
  convertModelToFormData,
  convertMultiFileModelToFormData,
  convertSingleFileModelToFormData,
} from 'src/app/_functions/formDataConverter';
import {
  Campaign,
  CampaignOverview,
  CampaignRaw,
  WikiStatistics,
} from 'src/app/_models/campaign';
import { EmptySearchResponse } from 'src/app/_models/emptySearchResponse';
import { OverviewItem } from 'src/app/_models/overview';
import { User } from 'src/app/_models/user';
import { log } from 'src/utils/logging';
import { createRequestPipeline, mergeRequestPipelines } from 'src/utils/query';
import { BaseService, ReadByNameParams } from '../base.service';

type ChangeMemberAction =
  | 'add_member'
  | 'remove_member'
  | 'add_admin'
  | 'remove_admin'
  | 'add_guest'
  | 'remove_guest';
type ChangeMemberRequest = {
  campaign: string;
  body: {
    user: User;
    action: ChangeMemberAction;
  };
};

@Injectable({
  providedIn: 'root',
})
export class CampaignService extends BaseService<CampaignRaw, Campaign> {
  private camapignOverviewTrigger$ = new Subject<void>();
  campaignOverview = createRequestPipeline<void, CampaignOverview[]>(
    this.camapignOverviewTrigger$.asObservable(),
    () => this._loadCampaignOverview(),
  );

  deactivate = this.delete;

  private changeMembersTrigger = new Subject<ChangeMemberRequest>();
  changedMembers = createRequestPipeline<ChangeMemberRequest, User[]>(
    this.changeMembersTrigger.asObservable(),
    ({ campaign, body }) => this._patchMember(campaign, body),
  );

  protected override _readByParams = createRequestPipeline<
    ReadByNameParams,
    Campaign
  >(this.readByParamTrigger$.asObservable(), ({ campaign }) =>
    this._loadReadByParam(campaign),
  );

  private addEmptySearchResponseTrigger$ = new Subject<EmptySearchResponse>();
  addEmptySearchResponse = createRequestPipeline<EmptySearchResponse, Campaign>(
    this.addEmptySearchResponseTrigger$.asObservable(),
    (model) => this._runAddEmptySearchResponse(model),
  );

  override read = mergeRequestPipelines(
    this._read,
    this.addEmptySearchResponse,
    this._readByParams,
  );

  private deleteEmptySearchResponseTrigger = new Subject<{ pk: number }>();
  deleteEmptySearchResponse = createRequestPipeline<{ pk: number }, void>(
    this.deleteEmptySearchResponseTrigger.asObservable(),
    ({ pk }) => this._runDeleteEmptySearchResponse(pk),
  );

  private statisticsTrigger = new Subject<{ campaignName: string }>();
  statistics = createRequestPipeline<{ campaignName: string }, WikiStatistics>(
    this.statisticsTrigger.asObservable(),
    ({ campaignName }) => this._loadStatistics(campaignName),
  );

  constructor(http: HttpClient) {
    super(http, 'campaign');
  }

  loadCampaignOverview() {
    log(this.loadCampaignOverview.name, this.baseUrl);
    this.camapignOverviewTrigger$.next();
  }

  private _loadCampaignOverview(): Observable<CampaignOverview[]> {
    return this.http.get<CampaignOverview[]>(`${this.baseUrl}/overview/`);
  }

  override runCreate(data: Campaign) {
    const campaignData = this.processCampaignData(data);
    super.runCreate(campaignData);
  }

  override runUpdate(
    pk: number,
    data: CampaignRaw &
      Record<'pk', number> &
      Record<'update_datetime', string>,
  ) {
    const campaignData = this.processCampaignData(data) as CampaignRaw &
      Record<'pk', number>;
    super.runUpdate(pk, campaignData);
  }

  override runPatch(pk: number, data: CampaignRaw) {
    const campaignData = this.processCampaignData(data) as CampaignRaw;
    super.runPatch(pk, campaignData);
  }

  private processCampaignData(
    userModel: Campaign | CampaignRaw,
  ): Campaign | CampaignRaw | FormData {
    log(this.processCampaignData.name, userModel);

    const hasNewIcon: boolean = this.hasImageSelected(userModel.icon);
    const hasNewBackgroundImage: boolean = this.hasImageSelected(
      userModel.background_image,
    );

    if (!hasNewIcon && !hasNewBackgroundImage) {
      delete userModel.icon;
      delete userModel.background_image;
      return convertModelToFormData(userModel);
    } else if (!hasNewIcon && hasNewBackgroundImage) {
      delete userModel.icon;
      const userModelFormData: FormData = convertSingleFileModelToFormData(
        userModel,
        'background_image',
      );
      return userModelFormData;
    } else if (hasNewIcon && !hasNewBackgroundImage) {
      delete userModel.background_image;
      const userModelFormData: FormData = convertSingleFileModelToFormData(
        userModel,
        'icon',
      );
      return userModelFormData;
    } else {
      const userModelFormData: FormData = convertMultiFileModelToFormData(
        userModel,
        ['background_image', 'icon'],
      );
      return userModelFormData;
    }
  }

  private hasImageSelected(imageFieldValue: any): boolean {
    return imageFieldValue.constructor.name === 'FileList';
  }

  override runDelete(pk: number) {
    throw "You can not delete a campaign, please use 'deactivate' instead";
  }

  /** Under the hood this may call "delete" but "delete" does not actually delete a campaign in the backend, it just deactivates it
   * The functions were renamed to make that fact clear
   */
  runDeactivate(pk: number) {
    super.runDelete(pk);
  }

  loadStatistics(campaignName: string) {
    log(this.loadStatistics.name, { campaignName });
    this.statisticsTrigger.next({ campaignName });
  }

  private _loadStatistics(campaignName: string): Observable<WikiStatistics> {
    return this.http.get<WikiStatistics>(
      `${this.apiUrl}/admin/statistics/${campaignName}`,
    );
  }

  /**
   * @description Allows you to send a read query based on a param, e.g. "name", assuming the backend is set up for it.
   * The targetted URL will be "${baseURL of API Endpoint}/param"
   * @param param
   * @returns The data from that endpoint by the service
   */
  override loadReadByParam(campaign: string) {
    log(this.loadReadByParam.name, campaign);
    this.readByParamTrigger$.next({ campaign, params: { name: campaign } });
  }

  protected override _loadReadByParam(campaign: string): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.baseUrl}/${campaign}/`);
  }

  runAddGuest(campaign: string, user: User) {
    log(this.runAddGuest.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'add_guest', user },
    });
  }

  runAddMember(campaign: string, user: User) {
    log(this.runAddMember.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'add_member', user },
    });
  }

  runAddAdmin(campaign: string, user: User) {
    log(this.runAddAdmin.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'add_admin', user },
    });
  }

  runRemoveGuest(campaign: string, user: User) {
    log(this.runRemoveGuest.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'remove_guest', user },
    });
  }

  runRemoveMember(campaign: string, user: User) {
    log(this.runRemoveMember.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'remove_member', user },
    });
  }

  runRemoveAdmin(campaign: string, user: User) {
    log(this.runRemoveAdmin.name, { campaign, user });
    this.changeMembersTrigger.next({
      campaign,
      body: { action: 'remove_admin', user },
    });
  }

  private _patchMember(
    campaign: string,
    requestBody: { action: string; user: User },
  ): Observable<User[]> {
    return this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
  }

  runAddEmptySearchResponse(responseModel: EmptySearchResponse) {
    log(this.runAddEmptySearchResponse.name, responseModel);
    this.addEmptySearchResponseTrigger$.next(responseModel);
  }

  private _runAddEmptySearchResponse(
    responseModel: EmptySearchResponse,
  ): Observable<Campaign> {
    return this.http.post<Campaign>(
      `${this.apiUrl}/emptysearchresponse/`,
      responseModel,
    );
  }

  runDeleteEmptySearchResponse(emptySearchResponsePk: number) {
    log(this.runDeleteEmptySearchResponse.name, emptySearchResponsePk);
    this.deleteEmptySearchResponseTrigger.next({ pk: emptySearchResponsePk });
  }

  private _runDeleteEmptySearchResponse(
    emptySearchResponsePk: number,
  ): Observable<void> {
    return this.http
      .delete(`${this.apiUrl}/emptysearchresponse/pk/${emptySearchResponsePk}/`)
      .pipe(switchMap(() => void 0));
  }

  override parseEntity(data: any): Campaign {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    return data;
  }
}
