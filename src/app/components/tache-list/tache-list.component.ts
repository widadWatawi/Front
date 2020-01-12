import { Component, OnInit } from '@angular/core';
import { TacheService} from "../../shared_services/tache.service";
import {Router} from "@angular/router";
import {PhaseService} from "../../shared_services/phase.service";


@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent implements OnInit {

  taches:any;
  phase_id:number;
  name:string;

  constructor(private service:TacheService, private route:Router) { }

  ngOnInit() {
    this.phase_id=this.service.phase_id;
    let resp=this.service.getTache(this.phase_id);
    resp.subscribe((data)=>this.taches=data);
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
  }

  public findTacheByName(){
    let resp= this.service.getTacheByName(this.name);
    resp.subscribe((data)=>this.taches=data);
  }

  public validerTache(id:number){
    let resp= this.service.validerTache(id);
    resp.subscribe((data)=>this.taches=data);
  }


}
