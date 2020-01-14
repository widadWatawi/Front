import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";
import {Projet} from "../../projet";

@Component({
  selector: 'app-edit-projet',
  templateUrl: './edit-projet.component.html',
  styleUrls: ['./edit-projet.component.css']
})
export class EditProjetComponent implements OnInit {

  projet: Projet= new Projet("projet2", 22, "a faire");
  message:any;

  constructor(private service:ProjectService, private route:Router) { }

  ngOnInit() {
    this.projet=this.service.projet;

  }

  public edit(){

      let resp=this.service.updateProject(this.projet);
      resp.subscribe((data)=>this.message=data);
      this.route.navigate(['/search']);

  }

}
