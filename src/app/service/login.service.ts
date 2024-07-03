import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Credentials } from '../model/credentials';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private authUserSubject = new BehaviorSubject<string| null>(null);
  authUser$ = this.authUserSubject.asObservable();
  
  private url = `${baseUrl}`;//alt+96
  private httpHeaders = new HttpHeaders({'Access-Control-Allow-Origin': 'http://localhost:8080'});
  constructor(private http:HttpClient) { } //inyectar httpClient

  private listaCambio = new Subject<any[]>();

  login(creds: Credentials)
  {
      return this.http.post('http://localhost:8080/authenticate', creds, {
        observe:'response'
      }).pipe(map((response: HttpResponse<any>) => {
        const body = response.body;
        const headers = response.headers;
        const bearerToken = headers.get('Authorization')!;
        console.log(headers.get('Authorization')!);
        const token = bearerToken.replace('Bearer ', '');
        console.log(token);
        localStorage.setItem('token', token);
        localStorage.setItem('user', body.username);
        this.authUserSubject.next(body.username);
        return body;
      }));
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUser(){
    return localStorage.getItem('user');
  }
  closeSession(){
    localStorage.clear();
    this.authUserSubject.next(null);
  }
}
