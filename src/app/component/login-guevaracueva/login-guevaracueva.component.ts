import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from '../../model/credentials';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login-guevaracueva',
  templateUrl: './login-guevaracueva.component.html',
  styleUrl: './login-guevaracueva.component.scss',
})
export class LoginGuevaracuevaComponent {
  loginForm: FormGroup;
  creds: Credentials = {
    username: '',
    password: '',
  };
  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      username: this.fb.control('', Validators.required),
      password: this.fb.control('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      alert('Los campos son invalidos');
    } else {
      this.loginService.login(this.loginForm.value).subscribe({
        next: (response) => {
          this.router.navigate(['/guevara/home']);
        },
        error: () => alert("La contraseña o el username es incorrecto")
      });
    }
  }
}
