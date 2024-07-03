import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.base;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ '/Guevara/certifications/Quantity');
  }
  getDataReport(): Observable<any> {
    return this.http.get<any>(this.apiUrl+ '/Guevara/certifications/Investment');
  }
}
