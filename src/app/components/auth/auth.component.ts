import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {UserService} from "../../shared_services/user.service";
import {Router} from "@angular/router";
import {Projet} from "../../projet";
import {User} from "../../user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {



  constructor(private service:UserService, private route:Router) { }

  user: User= new User("login", "pwd");
  login:'widad';
  pwd:'widad';
  invalidLogin = false
  message:any;


  ngOnInit() {
    this.service.logOut();
  }

  public logIn(){
      if(this.service.authenticate(this.login,this.pwd)){
        sessionStorage.setItem('login', this.login);
        this.route.navigate(["search"]);
        sessionStorage.setItem('load', 'load');
        this.invalidLogin = false;
      }
      else {
        this.invalidLogin = true;
      }

  }

}
