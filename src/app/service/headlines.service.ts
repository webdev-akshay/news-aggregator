import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadlinesService {
  private apiUrl=environment.apiUrl;
  private apiKey=environment.apiKey;

  constructor(private http:HttpClient) { }

  getHeadlines(query: string = 'news', language: string = 'en'): Observable<any> {
    const params=new HttpParams()
    .set('apiKey',this.apiKey)
    .set('q',query)
    .set('language',language)
    return this.http.get(`${this.apiUrl}/everything`,{params});
  }
}
