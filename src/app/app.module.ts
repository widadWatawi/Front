import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Route, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProjectService} from './shared_services/project.service';
import { PhaseService} from './shared_services/phase.service';
import { ProjectRegistrationComponent } from './components/project-registration/project-registration.component';
import { ProjectSearchDeleteComponent } from './components/project-search-delete/project-search-delete.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { PhaseListComponent } from './components/phase-list/phase-list.component';
import { PhaseFormComponent } from './components/phase-form/phase-form.component';
import { TacheListComponent } from './components/tache-list/tache-list.component';
import { TacheFormComponent } from './components/tache-form/tache-form.component';
import {TacheService} from './shared_services/tache.service';




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ProjectRegistrationComponent,
    ProjectSearchDeleteComponent,
    PhaseListComponent,
    PhaseFormComponent,
    TacheListComponent,
    TacheFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProjectService, PhaseService, TacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
