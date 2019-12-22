import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Route, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectService} from "./shared_services/project.service";
import { ProjectRegistrationComponent } from './components/project-registration/project-registration.component';
import { ProjectSearchDeleteComponent } from './components/project-search-delete/project-search-delete.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";



const appRoutes:Routes=[
  {path:'', component:ListProjectComponent},
  {path:'form', component:ProjectFormComponent}
];


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ListProjectComponent,
    ProjectFormComponent,
    ProjectRegistrationComponent,
    ProjectSearchDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
