import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MyformComponent } from './myform/myform.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MyformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
