import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Timestamp } from 'src/app/_models/sessionAudio';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class SessionAudioTimestampService {
  apiUrl: string = environment.apiUrl;
  baseUrl: string = `${this.apiUrl}/timestamp`;

  timestamps = createRequestSubjects<Timestamp[]>();
  create = createRequestSubjects<Timestamp>();
  delete = createRequestSubjects<void>();

  constructor(private http: HttpClient) {}

  loadTimestamps(
    campaign: string,
    isMainSessionInt: number,
    sessionNumber: number,
  ) {
    const entries$ = this.http.get<Timestamp[]>(
      `${this.baseUrl}/${campaign}/${isMainSessionInt}/${sessionNumber}/`,
    );

    trackQuery(entries$, this.timestamps);
  }

  runCreate(data: any) {
    const entry$ = this.http.post<Timestamp>(`${this.baseUrl}/`, data);
    trackQuery(entry$, this.create);
  }

  runDelete(pk: number) {
    const entry$ = this.http
      .delete(`${this.baseUrl}/pk/${pk}/`)
      .pipe(map(() => void 0));
    trackQuery(entry$, this.delete);
  }
}
