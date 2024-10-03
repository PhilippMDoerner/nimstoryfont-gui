import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map as switchMap } from 'rxjs/operators';
import {
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
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class CampaignService extends BaseService<CampaignRaw, Campaign> {
  campaignOverview = createRequestSubjects<CampaignOverview[]>();
  deactivate = createRequestSubjects<void>();
  users = createRequestSubjects<User[]>();
  addEmptySearchResponse = createRequestSubjects<EmptySearchResponse>();
  deleteEmptySearchResponse = createRequestSubjects<void>();
  statistics = createRequestSubjects<WikiStatistics>();

  constructor(
    http: HttpClient,
    private tokenService: TokenService,
  ) {
    super(http, 'campaign');
  }

  loadCampaignOverview() {
    if (this.isDevelop) console.log('loadCampaignOverview', this.baseUrl);

    const campaignsObs$: Observable<CampaignOverview[]> = this.http.get<
      CampaignOverview[]
    >(`${this.baseUrl}/overview/`);

    trackQuery(campaignsObs$, this.campaignOverview);
  }

  override runCreate(data: Campaign) {
    const campaignData = this.processCampaignData(data);
    super.runCreate(campaignData);
  }

  override runUpdate(pk: number, data: CampaignRaw) {
    const campaignData = this.processCampaignData(data) as CampaignRaw;
    super.runUpdate(pk, campaignData);
  }

  override runPatch(pk: number, data: CampaignRaw) {
    const campaignData = this.processCampaignData(data) as CampaignRaw;
    super.runPatch(pk, campaignData);
  }

  private processCampaignData(
    userModel: Campaign | CampaignRaw,
  ): Campaign | CampaignRaw | FormData {
    if (this.isDevelop) console.log('processCampaignData', userModel);

    const hasNewIcon: boolean = this.hasImageSelected(userModel.icon);
    const hasNewBackgroundImage: boolean = this.hasImageSelected(
      userModel.background_image,
    );

    if (!hasNewIcon && !hasNewBackgroundImage) {
      delete userModel.icon;
      delete userModel.background_image;
      return userModel;
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

  loadStatistics(campaign_name: string) {
    const statisticsUrl = `${this.apiUrl}/admin/statistics/${campaign_name}`;
    if (this.isDevelop) console.log('loadStatistics', statisticsUrl);

    const entity$ = this.http.get<WikiStatistics>(statisticsUrl);
    trackQuery(entity$, this.statistics);
  }

  /**
   * @description Allows you to send a read query based on a param, e.g. "name", assuming the backend is set up for it.
   * The targetted URL will be "${baseURL of API Endpoint}/param"
   * @param param
   * @returns The data from that endpoint by the service
   */
  override loadReadByParam(campaign: string) {
    const entry$ = this.http.get<Campaign>(`${this.baseUrl}/${campaign}/`);
    trackQuery(entry$, this.read);
  }

  runAddGuest(campaign: string, user: User) {
    if (this.isDevelop) console.log('runAddGuest', campaign, user);

    const requestBody = { action: 'add_guest', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
    trackQuery(entries$, this.users);
  }

  runAddMember(campaign: string, user: User) {
    if (this.isDevelop) console.log('runAddMember', campaign, user);

    const requestBody = { action: 'add_member', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
    trackQuery(entries$, this.users);
  }

  runAddAdmin(campaign: string, user: User) {
    if (this.isDevelop) console.log('runAddAdmin', campaign, user);

    const requestBody = { action: 'add_admin', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );

    trackQuery(entries$, this.users);
  }

  runRemoveGuest(campaign: string, user: User) {
    if (this.isDevelop) console.log('runRemoveGuest', campaign, user);

    const requestBody = { action: 'remove_guest', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
    trackQuery(entries$, this.users);
  }

  runRemoveMember(campaign: string, user: User) {
    if (this.isDevelop) console.log('runRemoveMember', campaign, user);

    const requestBody = { action: 'remove_member', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
    trackQuery(entries$, this.users);
  }

  runRemoveAdmin(campaign: string, user: User) {
    if (this.isDevelop) console.log('runRemoveAdmin', campaign, user);

    const requestBody = { action: 'remove_admin', user };
    const entries$ = this.http.patch<User[]>(
      `${this.baseUrl}/${campaign}/members/`,
      requestBody,
    );
    trackQuery(entries$, this.users);
  }

  runAddEmptySearchResponse(responseModel: EmptySearchResponse) {
    if (this.isDevelop) console.log('runAddEmptySearchResponse', responseModel);

    const emptySearchUrl = `${this.apiUrl}/emptysearchresponse/`;
    const entry$ = this.http.post<EmptySearchResponse>(
      emptySearchUrl,
      responseModel,
    );
    trackQuery(entry$, this.addEmptySearchResponse);
  }

  runDeleteEmptySearchResponse(emptySearchResponsePk: number) {
    if (this.isDevelop)
      console.log('runDeleteEmptySearchResponse', emptySearchResponsePk);

    const entry$ = this.http
      .delete(`${this.apiUrl}/emptysearchresponse/pk/${emptySearchResponsePk}`)
      .pipe(switchMap(() => void 0));
    trackQuery(entry$, this.deleteEmptySearchResponse);
  }

  override parseEntity(data: any): Campaign {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    return data;
  }
}
