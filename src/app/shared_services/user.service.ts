import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User= new User("login", "pwd");


  constructor(private http:HttpClient) { }

  authenticate(login, pwd) {


    if (this.http.get("http://localhost:8081/personnel/"+login+"/"+pwd)) {
      sessionStorage.setItem('login', login)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('login')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('login')
  }
}

