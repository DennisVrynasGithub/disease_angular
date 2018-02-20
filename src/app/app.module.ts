import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Questionnaire1Component } from './components/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { Questionnaire3Component } from './components/questionnaire3/questionnaire3.component';
import { Questionnaire4Component } from './components/questionnaire4/questionnaire4.component';
import { Questionnaire5Component } from './components/questionnaire5/questionnaire5.component';
import { Questionnaire6Component } from './components/questionnaire6/questionnaire6.component';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    DiseasesComponent,
    SymptomsComponent,
    SidebarComponent,
    Questionnaire1Component,
    Questionnaire2Component,
    Questionnaire3Component,
    Questionnaire4Component,
    Questionnaire5Component,
    Questionnaire6Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
