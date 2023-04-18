import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';

const url = {
  ApiUrl: "http://localhost:3000"
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
 
  login(): Observable<any> {
    return this.http.get<any>(`${url.ApiUrl}/auth/steam/return`)
  }
}
