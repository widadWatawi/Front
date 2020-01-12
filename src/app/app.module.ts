import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {RouterModule, Route, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectService} from "./shared_services/project.service";
import { ProjectRegistrationComponent } from './components/project-registration/project-registration.component';
import { ProjectSearchDeleteComponent } from './components/project-search-delete/project-search-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';






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
    ProjectSearchDeleteComponent,
    AuthComponent,
    FooterComponent,
    DashboardComponent,
    MyBarChartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
