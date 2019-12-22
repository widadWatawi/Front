import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRegistrationComponent} from "./components/project-registration/project-registration.component";
import { ProjectSearchDeleteComponent} from "./components/project-search-delete/project-search-delete.component";

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  {path:"register",component:ProjectRegistrationComponent},
  {path:"search",component:ProjectSearchDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
