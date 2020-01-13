import { Component, OnInit } from '@angular/core';
import {Projet} from "../../projet";
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";

export interface Statut {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-project-registration',
  templateUrl: './project-registration.component.html',
  styleUrls: ['./project-registration.component.css']
})
export class ProjectRegistrationComponent implements OnInit {



  projet: Projet= new Projet("projet2", 22, "a faire");
  message:any;

  constructor(private service:ProjectService, private route:Router) { }

  ngOnInit() {
    this.projet=this.service.projet;
  }

  public save(){

   if(this.projet.id==undefined){
      let resp=this.service.doRegistration(this.projet);
      resp.subscribe((data)=>this.message=data);
      //this.route.navigate(['/search']);
    }

   else {
      let resp=this.service.updateProject(this.projet);
      resp.subscribe((data)=>this.message=data);
      this.route.navigate(['/search']);
    }

  }

}
