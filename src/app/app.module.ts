import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import {RouterModule, Route, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";



import { AppComponent } from './app.component';
import { ProjectService} from './shared_services/project.service';
import { PhaseService} from './shared_services/phase.service';
import { ProjectRegistrationComponent } from './components/project-registration/project-registration.component';
import { ProjectSearchDeleteComponent } from './components/project-search-delete/project-search-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

import { PhaseListComponent } from './components/phase-list/phase-list.component';
import { PhaseFormComponent } from './components/phase-form/phase-form.component';
import { TacheListComponent } from './components/tache-list/tache-list.component';
import { TacheFormComponent } from './components/tache-form/tache-form.component';
import {TacheService} from './shared_services/tache.service';

import { AffectationListComponent } from './components/affectation-list/affectation-list.component';

import { MenuComponent } from './components/menu/menu.component';
import { EditProjetComponent } from './components/edit-projet/edit-projet.component';
import { ProfileComponent } from './profile/profile.component';
import { AffectationListTachesComponent } from './components/affectation-list-taches/affectation-list-taches.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProjectRegistrationComponent,
    ProjectSearchDeleteComponent,
    AuthComponent,
    FooterComponent,
    DashboardComponent,
    MyBarChartComponent,
    PhaseListComponent,
    PhaseFormComponent,
    TacheListComponent,
    TacheFormComponent,
    AffectationListComponent,
    TacheFormComponent,
    MenuComponent,
    EditProjetComponent,
    ProfileComponent,
    AffectationListTachesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [ProjectService, PhaseService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
