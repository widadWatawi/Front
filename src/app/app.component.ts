import { Component } from '@angular/core';
import {UserService} from "./shared_services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(private service:UserService,  private router: Router, private activatedRoute: ActivatedRoute)
  {

  }


  public Logout(){
    this.service.logOut();
    this.router.navigate(['login']);
  }

  public Home(){
    this.router.navigate(['search']);
  }

  public AddProject(){
    this.router.navigate(['register']);
  }

  public Dashbord(){
    this.router.navigate(['bar-chart']);
  }

  public Profile(){
    this.router.navigate(['bar-chart']);
  }

  public Projects(){
    this.router.navigate(['search']);
  }


}
