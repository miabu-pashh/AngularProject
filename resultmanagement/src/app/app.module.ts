import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddResultComponent } from './add-result/add-result.component';
import { UpdateResultComponent } from './update-result/update-result.component';
import { ListResultComponent } from './list-result/list-result.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { TLoginComponent } from './t-login/t-login.component';
import { SignupComponent } from './signup/signup.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentResultComponent } from './student-result/student-result.component';

 

@NgModule({
  declarations: [
    AppComponent,
    AddResultComponent,
    UpdateResultComponent,
    ListResultComponent,
    LoginComponent,
    RegisterComponent,
    TLoginComponent,
    SignupComponent,
    StudentLoginComponent,
    StudentResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
