import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { ChartsModule } from 'ng2-charts';
import {RouterModule, Route, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
=======

import {RouterModule, Route, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad

import { AppComponent } from './app.component';
import { ProjectService} from './shared_services/project.service';
import { PhaseService} from './shared_services/phase.service';
import { ProjectRegistrationComponent } from './components/project-registration/project-registration.component';
import { ProjectSearchDeleteComponent } from './components/project-search-delete/project-search-delete.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';



=======
import {FormsModule} from '@angular/forms';
import { PhaseListComponent } from './components/phase-list/phase-list.component';
import { PhaseFormComponent } from './components/phase-form/phase-form.component';
import { TacheListComponent } from './components/tache-list/tache-list.component';
import { TacheFormComponent } from './components/tache-form/tache-form.component';
import {TacheService} from './shared_services/tache.service';
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProjectRegistrationComponent,
    ProjectSearchDeleteComponent,
<<<<<<< HEAD
    AuthComponent,
    FooterComponent,
    DashboardComponent,
    MyBarChartComponent,

=======
    PhaseListComponent,
    PhaseFormComponent,
    TacheListComponent,
    TacheFormComponent
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ChartsModule
=======
    AppRoutingModule
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad
  ],
  providers: [ProjectService, PhaseService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
