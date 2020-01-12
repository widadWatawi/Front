import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRegistrationComponent} from "./components/project-registration/project-registration.component";
import { ProjectSearchDeleteComponent} from "./components/project-search-delete/project-search-delete.component";
<<<<<<< HEAD
import {AuthComponent} from "./components/auth/auth.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';

=======
import {PhaseListComponent} from "./components/phase-list/phase-list.component";
import {PhaseFormComponent} from "./components/phase-form/phase-form.component";
import {TacheFormComponent} from "./components/tache-form/tache-form.component";
import {TacheListComponent} from "./components/tache-list/tache-list.component";
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad

const routes: Routes = [
   {path:"",redirectTo:"login",pathMatch:"full"},

    {path:"bar-chart",component: MyBarChartComponent},
    {path:"dashboard",component: DashboardComponent},
    {path:"login",component:AuthComponent},
  {path:"register",component:ProjectRegistrationComponent},
<<<<<<< HEAD
  {path:"search",component:ProjectSearchDeleteComponent}

=======
  {path:"search",component:ProjectSearchDeleteComponent},
  {path:"phaseForm",component:PhaseFormComponent},
  {path:"phases",component:PhaseListComponent},
  {path:"tacheForm",component:TacheFormComponent},
  {path:"taches",component:TacheListComponent}
>>>>>>> 164e43c975a85d917cb8e6a725665a2afb2918ad
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
