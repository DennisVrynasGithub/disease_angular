import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { DiseasesComponent } from './components/diseases/diseases.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Questionnaire1Component } from './components/questionnaire1/questionnaire1.component';
import { Questionnaire2Component } from './components/questionnaire2/questionnaire2.component';
import { Questionnaire3Component } from './components/questionnaire3/questionnaire3.component';
import { Questionnaire4Component } from './components/questionnaire4/questionnaire4.component';
import { Questionnaire5Component } from './components/questionnaire5/questionnaire5.component';
import { Questionnaire6Component } from './components/questionnaire6/questionnaire6.component';
import { ResultComponent } from './components/result/result.component';
import { AdminComponent } from './components/admin/admin.component';
import { LastResultComponent } from './components/last-result/last-result.component';
import { QuestComponent } from './components/quest/quest.component';
import { HistoryComponent } from './components/history/history.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // The Default Route
  },
  {
    path: 'history',
    component: HistoryComponent // The HistoryComponent Route
  },
  {
    path: 'quests',
    component: QuestComponent // The QuestComponent Route
  },
  {
    path: 'lastResultComponent',
    component: LastResultComponent // The LastResultComponent Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent // The Dashboard Route
  },
  {
    path: 'register',
    component: RegisterComponent // The Register Route,
  },
  {
    path: 'login',
    component: LoginComponent // The Login Route
  },
  {
    path: 'diseases',
    component: DiseasesComponent // The diseases Route
  },
  {
    path: 'symptoms',
    component: SymptomsComponent // The symptoms Route
  },
  {
    path: 'profile',
    component: ProfileComponent // The Profile Route
  },
  {
    path: 'questionnaire1',
    component: Questionnaire1Component // The Quest1 Route
  },
  {
    path: 'admin',
    component: AdminComponent // TheR esultComponent Route
  },
  {
    path: 'questionnaire2',
    component: Questionnaire2Component // The Quest1 Route
  },
  {
    path: 'questionnaire3',
    component: Questionnaire3Component // The Quest3 Route
  },
  {
    path: 'questionnaire4',
    component: Questionnaire4Component // The Quest4 Route
  },
  {
    path: 'questionnaire5',
    component: Questionnaire5Component // The Quest5 Route
  },
  {
    path: 'questionnaire6',
    component: Questionnaire6Component // The Quest6 Route
  },
  {
    path: 'result',
    component: ResultComponent // TheR esultComponent Route
  },
  { path: '**', component: HomeComponent } // The "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
