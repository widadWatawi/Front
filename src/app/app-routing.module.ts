import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRegistrationComponent} from "./components/project-registration/project-registration.component";
import { ProjectSearchDeleteComponent} from "./components/project-search-delete/project-search-delete.component";
import {PhaseListComponent} from "./components/phase-list/phase-list.component";
import {PhaseFormComponent} from "./components/phase-form/phase-form.component";
import {TacheFormComponent} from "./components/tache-form/tache-form.component";
import {TacheListComponent} from "./components/tache-list/tache-list.component";

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:ProjectRegistrationComponent},
  {path:"search",component:ProjectSearchDeleteComponent},
  {path:"phaseForm",component:PhaseFormComponent},
  {path:"phases",component:PhaseListComponent},
  {path:"tacheForm",component:TacheFormComponent},
  {path:"taches",component:TacheListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
