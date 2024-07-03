import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
  authUser$: Observable<string | null>;

  constructor(private router : Router, private http:HttpClient, private loginService: LoginService) {
    this.authUser$ = this.loginService.authUser$;
  };

  public close(){
    this.loginService.closeSession();
    this.router.navigate(['/guevara/login']);
  }

}
