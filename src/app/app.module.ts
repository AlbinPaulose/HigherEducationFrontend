import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpErrorResponse} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ViewweatherdataComponent } from './viewweatherdata/viewweatherdata.component';
import { HomeComponent } from './home/home.component';
import { CourseregisterComponent } from './admin/courseregister/courseregister.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { FuturecourseComponent } from './admin/futurecourse/futurecourse.component';
import { CollegesComponent } from './admin/colleges/colleges.component';
import { CollegelistComponent } from './admin/collegelist/collegelist.component';
import { ViewcollegesComponent } from './viewcolleges/viewcolleges.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewweatherdataComponent,
    HomeComponent,
    CourseregisterComponent,
    AdminloginComponent,
    AdminhomeComponent,
    FuturecourseComponent,
    CollegesComponent,
    CollegelistComponent,
    ViewcollegesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
