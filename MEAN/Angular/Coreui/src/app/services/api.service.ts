import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/';
  apiUrl = {
    student: `${this.baseUrl}student`,
  }
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
  put<T>(url: string, data: Object): Observable<T> {
    return this.http.put<T>(url, data);
  }
  post<T>(url: string, data: Object): Observable<T> {
    return this.http.post<T>(url, data);
  }
}
