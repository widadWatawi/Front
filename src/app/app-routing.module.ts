import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRegistrationComponent} from "./components/project-registration/project-registration.component";
import { ProjectSearchDeleteComponent} from "./components/project-search-delete/project-search-delete.component";
import {AuthComponent} from "./components/auth/auth.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import {PhaseListComponent} from "./components/phase-list/phase-list.component";
import {PhaseFormComponent} from "./components/phase-form/phase-form.component";
import {TacheFormComponent} from "./components/tache-form/tache-form.component";
import {TacheListComponent} from "./components/tache-list/tache-list.component";
import {AffectationListComponent} from "./components/affectation-list/affectation-list.component";
import {EditProjetComponent} from "./components/edit-projet/edit-projet.component";

const routes: Routes = [
   {path:"",redirectTo:"login",pathMatch:"full"},

  {path:"bar-chart",component: MyBarChartComponent},
  {path:"dashboard",component: DashboardComponent},
  {path:"login",component:AuthComponent,data: { title: 'welcome', toolbar: false}},
  {path:"register",component:ProjectRegistrationComponent},
  {path:"search",component:ProjectSearchDeleteComponent},
  {path:"phaseForm",component:PhaseFormComponent},
  {path:"phases",component:PhaseListComponent},
  {path:"tacheForm",component:TacheFormComponent},
  {path:"taches",component:TacheListComponent},
  {path:"affectation",component:AffectationListComponent},
  {path:"editProjet",component:EditProjetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
