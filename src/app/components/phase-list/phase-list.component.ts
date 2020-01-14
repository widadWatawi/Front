import { Component, OnInit } from '@angular/core';
import {PhaseService} from "../../shared_services/phase.service";
import {TacheService} from "../../shared_services/tache.service";
import {Router} from "@angular/router";
import {UserService} from "../../shared_services/user.service";

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit {

  phases:any;
  phases1:any;
  phases2:any;
  projet_id:number;
  name:string;
  login:string;
  user:any;

  constructor(private service:PhaseService ,private serviceUser:UserService,private serviceTache:TacheService,  private route:Router) { }

  ngOnInit() {

    this.login=sessionStorage.getItem('login');
    let resp_user= this.serviceUser.getUserByLogin(this.login);
    resp_user.subscribe((data)=>this.user=data);
    this.getPhases();
  }

  public getPhases(){
    this.projet_id=this.service.projet_id;
    let resp=this.service.getPhases(this.projet_id);
    resp.subscribe((data)=>this.phases=data);
      resp.subscribe((data)=>this.phases1=data);
        resp.subscribe((data)=>this.phases2=data);
  }

  public addPhase(){
    this.route.navigate(['/phaseForm']);
  }

  public updatePhase(phase){
    this.service.phase=phase;
    this.route.navigate(['/phaseForm']);
  }

  public deletePhase(id:number){
    let resp= this.service.deletePhase(id);
    resp.subscribe((data)=>this.phases=data);
  }

  public findPhaseByName(){
    let resp= this.service.getPhaseByName(this.name);
    resp.subscribe((data)=>this.phases=data);
  }

  public getTaches(phase_id){
    this.serviceTache.phase_id=phase_id;
    this.route.navigate(['/taches']);
  }

  public validerPhase(id:number){
    let resp= this.service.validerPhase(id);
    resp.subscribe((data)=>this.phases=data);
  }

}
