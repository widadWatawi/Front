import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";
import {PhaseService} from "../../shared_services/phase.service";
import { AffectationService} from "../../shared_services/affectation.service";
import {UserService} from "../../shared_services/user.service";
import {User} from "../../user";

@Component({
  selector: 'app-project-search-delete',
  templateUrl: './project-search-delete.component.html',
  styleUrls: ['./project-search-delete.component.css']
})
export class ProjectSearchDeleteComponent implements OnInit {

  projets_chefs:any;
  projets_employees:any;
  projets:any;
  phases:any;
  name:string;
  login:string;
  user:any;
  mimi:any;

  constructor(private service:ProjectService, private servicePhase:PhaseService, private serviceAffectation:AffectationService,private serviceUser:UserService, private route:Router) { }

  ngOnInit() {
    this.login=sessionStorage.getItem('login');
    let resp_user= this.serviceUser.getUserByLogin(this.login);
    resp_user.subscribe((data)=>this.user=data);
    if(sessionStorage.getItem('load')=='load'){
      location.reload();
      sessionStorage.setItem('load','notload');
    }
    this.ProjetsChefs();
    this.Projets();
    this.ProjetsEmployees();

  }


  public ProjetsChefs(){
      let resp=this.service.getProjectByChef(this.login);
      resp.subscribe((data)=>this.projets_chefs=data);
  }

  public ProjetsEmployees(){
    let resp=this.service.getProjectByEmployee(this.login);
    resp.subscribe((data)=>this.projets_employees=data);
  }

  public Projets(){
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
    this.route.navigate(['/editProjet']);
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
