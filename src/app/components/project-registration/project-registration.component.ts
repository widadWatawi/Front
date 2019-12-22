import { Component, OnInit } from '@angular/core';
import {Projet} from "../../projet";
import {ProjectService} from "../../shared_services/project.service";

@Component({
  selector: 'app-project-registration',
  templateUrl: './project-registration.component.html',
  styleUrls: ['./project-registration.component.css']
})
export class ProjectRegistrationComponent implements OnInit {

  projet: Projet= new Projet("projet2", 22, "a faire");
  message:any;

  constructor(private service:ProjectService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.projet);
    resp.subscribe((data)=>this.message=data);
  }

}
