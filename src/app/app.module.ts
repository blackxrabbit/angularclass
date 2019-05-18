import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyformComponent } from './myform/myform.component'
import { AppRoutingModule } from './app-routing.module';
import { FormSubmittedComponent } from './form-submitted/form-submitted.component';
import { AdminComponent } from './admin/admin.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MyformComponent,
    FormSubmittedComponent,
    AdminComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
