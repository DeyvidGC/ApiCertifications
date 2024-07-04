import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Credentials } from '../model/credentials';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Role } from '../model/role';

const baseUrl = environment.base;

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private authUserSubject = new BehaviorSubject<string| null>(null);
  authUser$ = this.authUserSubject.asObservable();

  private authRolSubject = new BehaviorSubject<string| null>(null);
  authRol$ = this.authRolSubject.asObservable();
  
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

        const roles: Role[] = body.authorities.map(
          (auth: { authority: string }) => {
            return {
              rol: auth.authority,
            };
          }
        );
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', body.username);
        this.authUserSubject.next(body.username);
        this.authRolSubject.next(roles[0].rol);
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
    this.authRolSubject.next(null);
  }
}
