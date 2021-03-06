import { Component, OnInit } from '@angular/core';
import { TacheService} from "../../shared_services/tache.service";
import {Router} from "@angular/router";
import {PhaseService} from "../../shared_services/phase.service";
import { AffectationService} from "../../shared_services/affectation.service";
import {UserService} from "../../shared_services/user.service";
import {Location} from "@angular/common";


@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {

  taches:any;
  taches2:any;
  phase_id:number;
  name:string;
  login:string;
  user:any;

  constructor(private service:TacheService, private serviceAffecattion:AffectationService, private location: Location ,private serviceUser:UserService,private route:Router) { }

  ngOnInit() {

    this.login=sessionStorage.getItem('login');
    let resp_user= this.serviceUser.getUserByLogin(this.login);
    resp_user.subscribe((data)=>this.user=data);

    this.getTaches();

  }

  public getTaches(){
    this.phase_id=this.service.phase_id;
    let resp=this.service.getTache(this.phase_id);
    resp.subscribe((data)=>this.taches=data);
  resp.subscribe((data)=>this.taches2=data);
  }

  public addTache(){
    this.route.navigate(['/tacheForm']);
  }

  public updateTache(tache){
    this.service.tache=tache;
    this.route.navigate(['/tacheForm']);
  }

  public deleteTache(id:number){
    let resp= this.service.deleteTache(id);
    resp.subscribe((data)=>this.taches=data);
    this.route.navigate(['/tacheForm']);
    this.location.back();
  }

  public findTacheByName(){
    let resp= this.service.getTacheByName(this.name);
    resp.subscribe((data)=>this.taches=data);
  }

  public validerTache(id:number){
    let resp= this.service.validerTache(id);
    resp.subscribe((data)=>this.taches=data);
    this.route.navigate(['/tacheForm']);
    this.location.back();
  }

  public getEmployees(id:number){
    this.serviceAffecattion.tache_id=id;
    this.route.navigate(['/affectationTaches']);
  }


}
