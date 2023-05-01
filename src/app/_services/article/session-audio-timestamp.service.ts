import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timestamp } from 'src/app/_models/sessionAudio';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({"Content-Type": "application/json"}),
}

@Injectable({
  providedIn: 'root'
})
export class SessionAudioTimestampService {
  apiUrl: string = environment.apiUrl;
  baseUrl: string = `${this.apiUrl}/timestamp`

  constructor(
    private http: HttpClient
  ) {}

  getTimestamps(
    campaign: string, 
    isMainSessionInt: number, 
    sessionNumber: number
  ): Observable<Timestamp[]>{
    return this.http.get<Timestamp[]>(`${this.baseUrl}/${campaign}/${isMainSessionInt}/${sessionNumber}/`);
  }
  
  create(data: any): Observable<Timestamp>{
    return this.http.post<Timestamp>(`${this.baseUrl}/`, data);
  }
  
  delete(pk: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/pk/${pk}/`);
  }
}
