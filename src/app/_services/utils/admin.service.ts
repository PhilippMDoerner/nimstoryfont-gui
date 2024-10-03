import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = environment.apiUrl;
  adminUrl = `${this.apiUrl}/admin`;

  clearDatabase = createRequestSubjects<void>();
  database = createRequestSubjects<Blob>();
  statistics = createRequestSubjects<{ [key: PropertyKey]: number }>();

  constructor(private http: HttpClient) {}

  runClearDatabase() {
    const entry$ = this.http.delete<void>(`${this.adminUrl}/dbclear`);
    trackQuery(entry$, this.clearDatabase);
  }

  loadDatabase() {
    const entry$ = this.http.get(`${this.adminUrl}/dbdownload`, {
      responseType: 'blob',
    });
    trackQuery(entry$, this.database);
  }

  loadStatistics() {
    const entries$ = this.http.get<{ [key: string]: number }>(
      `${this.adminUrl}/statistics`,
    );

    trackQuery(entries$, this.statistics);
  }
}
