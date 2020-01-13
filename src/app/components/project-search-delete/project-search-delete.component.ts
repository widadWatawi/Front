import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";
import {PhaseService} from "../../shared_services/phase.service";
import { AffectationService} from "../../shared_services/affectation.service";

@Component({
  selector: 'app-project-search-delete',
  templateUrl: './project-search-delete.component.html',
  styleUrls: ['./project-search-delete.component.css']
})
export class ProjectSearchDeleteComponent implements OnInit {

  projets:any;
  phases:any;
  name:string;

  constructor(private service:ProjectService, private servicePhase:PhaseService, private serviceAffectation:AffectationService, private route:Router) { }

  ngOnInit() {
    let resp=this.service.getProjects();
    resp.subscribe((data)=>this.projets=data);

  }

  public deleteProject(id:number){
    let resp= this.service.deleteProject(id);
    resp.subscribe((data)=>this.projets=data);
  }

  public validerProject(id:number){
    let resp= this.service.validerProject(id);
    resp.subscribe((data)=>this.projets=data);
  }

  public updateProject(projet){
    this.service.projet=projet;
    this.route.navigate(['/register']);
  }

  public findProjectByName(){
    let resp= this.service.getProjectByName(this.name);
    resp.subscribe((data)=>this.projets=data);
  }

  public getPhases(projet_id){
    this.servicePhase.projet_id=projet_id;
    this.route.navigate(['/phases']);
  }

  public getChefs(id:number){
    this.serviceAffectation.projet_id=id;
    this.route.navigate(['/affectation']);
  }

}
