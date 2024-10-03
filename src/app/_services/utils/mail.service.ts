import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  apiUrl: string = environment.apiUrl;
  mailUrl: string = `${this.apiUrl}/mail`;

  errorNotification = createRequestSubjects<any>();
  passwordReset = createRequestSubjects<any>();

  constructor(private http: HttpClient) {}

  sendErrorNotification(error: object) {
    const entry$ = this.http.post<any>(`${this.mailUrl}/error`, error);
    trackQuery(entry$, this.errorNotification);
  }

  requestPasswordReset(username: string) {
    const entry$ = this.http.post(`${this.mailUrl}/reset`, {
      username: username,
    });
    trackQuery(entry$, this.passwordReset);
  }
}
