import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectRegistrationComponent} from "./components/project-registration/project-registration.component";
import { ProjectSearchDeleteComponent} from "./components/project-search-delete/project-search-delete.component";
import {AuthComponent} from "./components/auth/auth.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';


const routes: Routes = [
   {path:"",redirectTo:"login",pathMatch:"full"},

    {path:"bar-chart",component: MyBarChartComponent},
    {path:"dashboard",component: DashboardComponent},
    {path:"login",component:AuthComponent},
  {path:"register",component:ProjectRegistrationComponent},
  {path:"search",component:ProjectSearchDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
