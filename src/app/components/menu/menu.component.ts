import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared_services/user.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {filter, map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showNav: any;
  visible:any;

  constructor(private service:UserService,  private router: Router, private activatedRoute: ActivatedRoute)
  {
  this.visible = true
  }

  ngOnInit() {
    this.visible = true
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => {
        this.showToolbar(event.toolbar); // show the toolbar?
      });
  }

  showToolbar(event) {
    if (event === false) {
      this.visible = false;
    } else if (event === true) {
      this.visible = true;
    } else {
      this.visible = this.visible;
    }
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
