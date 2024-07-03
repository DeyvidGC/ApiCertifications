import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './component/home/home.component';
import { LoginGuevaracuevaComponent } from './component/login-guevaracueva/login-guevaracueva.component';
import { Reporte01GuevaracuevaComponent } from './component/reporte01-guevaracueva/reporte01-guevaracueva.component';
import { Reporte02GuevaracuevaComponent } from './component/reporte02-guevaracueva/reporte02-guevaracueva.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';//add mano
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TokenInterceptor } from './service/token.interceptor';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginGuevaracuevaComponent,
    Reporte01GuevaracuevaComponent,
    Reporte02GuevaracuevaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSortModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatGridListModule,
    MatMenuModule,
    NgxChartsModule
  ],
  providers: [
    provideAnimationsAsync(),
    
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
