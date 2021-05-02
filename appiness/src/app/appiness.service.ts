import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const baseUrl = '/appinessapi';

let httpOptions = { headers: new HttpHeaders({
  "Content-Type": "application/json"
}) };

@Injectable({
  providedIn: 'root'
})
export class AppinessService {

  constructor(private httpClient: HttpClient) { }

  postSerice(reqObj:any):Observable<any> {
    return this.httpClient.post(baseUrl,reqObj,httpOptions)
  }

  getService(data:any) : Observable<any> {
    return this.httpClient.get<any>(baseUrl,data)
  }
}


