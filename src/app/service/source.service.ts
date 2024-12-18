import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  private apiUrl=environment.apiUrl;
  private apiKey=environment.apiKey;

  constructor(private http:HttpClient) { }

  getNewsSource(category:string='business',language:string='en'):Observable<any>{
    const params=new HttpParams()
    .set("apikey",this.apiKey)
    .set("category",category)
    .set("ln",language)
    return this.http.get(`${this.apiUrl}/top-headlines/sources`, {params})
  }
}
