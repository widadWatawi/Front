import { Component, OnInit } from '@angular/core';
import {PhaseService} from "../../shared_services/phase.service";
import {TacheService} from "../../shared_services/tache.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit {

  phases:any;
  projet_id:number;
  name:string;

  constructor(private service:PhaseService,private serviceTache:TacheService,  private route:Router) { }

  ngOnInit() {
    this.projet_id=this.service.projet_id;
    let resp=this.service.getPhases(this.projet_id);
    resp.subscribe((data)=>this.phases=data);
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
