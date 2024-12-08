import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiStatistics } from 'src/app/_models/campaign';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiUrl = environment.apiUrl;
  adminUrl = `${this.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  clearDatabase(): Observable<any> {
    return this.http.delete(`${this.adminUrl}/dbclear`);
  }

  downloadDatabase(): Observable<any> {
    return this.http.get(`${this.adminUrl}/dbdownload`, {
      responseType: 'blob',
    });
  }

  getStatistics(): Observable<WikiStatistics> {
    return this.http.get<WikiStatistics>(`${this.adminUrl}/statistics`);
  }
}
