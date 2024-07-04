import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginGuevaracuevaComponent } from './component/login-guevaracueva/login-guevaracueva.component';
import { Reporte01GuevaracuevaComponent } from './component/reporte01-guevaracueva/reporte01-guevaracueva.component';
import { Reporte02GuevaracuevaComponent } from './component/reporte02-guevaracueva/reporte02-guevaracueva.component';
import { AuthGuardGuard } from './security/auth-guard.guard';

const routes: Routes = [
  {
    path: 'guevara/home',
    canActivate: [AuthGuardGuard],
    component: HomeComponent,
  },
  {
    path: 'guevara/login',
    component: LoginGuevaracuevaComponent,
  },
  {
    path: 'guevara/reporte01',
    canActivate: [AuthGuardGuard],
    component: Reporte01GuevaracuevaComponent,
  },
  {
    path: 'guevara/reporte02',
    canActivate: [AuthGuardGuard],
    component: Reporte02GuevaracuevaComponent,
  },
  {
    path: '**',
    redirectTo: 'guevara/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


