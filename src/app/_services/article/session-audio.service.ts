import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { convertSingleFileModelToFormData } from 'src/app/_functions/formDataConverter';
import { OverviewItem } from 'src/app/_models/overview';
import { SessionAudio, SessionAudioRaw } from 'src/app/_models/sessionAudio';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class SessionAudioService extends BaseService<
  SessionAudioRaw,
  SessionAudio
> {
  UPLOAD_URL = `${this.apiUrl}/uploads`;

  uploadFile = createRequestSubjects<unknown>();

  constructor(
    private routingService: RoutingService,
    http: HttpClient,
  ) {
    super(http, 'sessionaudio');
  }

  override loadReadByParam(
    campaign: string,
    params: { isMainSession: number; sessionNumber: number },
  ) {
    const url = `${this.baseUrl}/${campaign}/${params.isMainSession}/${params.sessionNumber}/`;
    const entries$ = this.http
      .get<SessionAudio>(url)
      .pipe(map((entry) => this.parseEntity(entry)));

    trackQuery(entries$, this.read);
  }

  runUploadFile(fileName: string, file: File) {
    const headers = new HttpHeaders({
      'ngsw-bypass': 'true',
      'X-Progress-ID': fileName,
    });

    const entry$ = this.http.post<any>(`${this.UPLOAD_URL}/${fileName}`, file, {
      reportProgress: true,
      observe: 'events',
      headers: headers,
    });

    trackQuery(entry$, this.uploadFile);
  }

  override runUpdate(audioPk: number, sessionAudioModel: SessionAudio) {
    const url = `${this.baseUrl}/pk/${audioPk}/`;
    const formData: FormData = convertSingleFileModelToFormData(
      sessionAudioModel,
      'audio_file',
    );
    const headers = new HttpHeaders({ 'ngsw-bypass': 'true' });

    const entry$ = this.http
      .put<any>(url, formData, {
        headers: headers,
        observe: 'events',
        reportProgress: true,
      } as any)
      .pipe(map((data) => this.parseEntity(data))); //This bit is only required as otherwise there's some typescript definition missing and throwing errors

    trackQuery(entry$, this.update);
  }

  override parseEntity(data: any): SessionAudio {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  override parseOverviewEntity(data: any): OverviewItem {
    return {
      ...data,
      getAbsoluteRouterUrl: this.generateUrlCallback(data),
    };
  }

  private generateUrlCallback(data: any) {
    const campaignName = data.campaign_details.name;
    const isMainSession = data.session_details.is_main_session_int;
    const sessionNumber = data.session_details.session_number;

    return () =>
      this.routingService.getRoutePath('sessionaudio', {
        campaign: campaignName,
        isMainSession,
        sessionNumber,
      });
  }
}
