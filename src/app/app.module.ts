import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingMoudle } from './app-routing.module';
import { BackendService } from './backend.service';
import { HttpModule } from '../../node_modules/@angular/http';
import { LogItemComponent } from './log-item/log-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AboutComponent,
    ErrorComponent,
    LoginComponent,
    LogItemComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingMoudle,
    HttpModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
