import { Component, OnInit } from '@angular/core';
import {Phase} from "../../phase";
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";
import {PhaseService} from "../../shared_services/phase.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-phase-form',
  templateUrl: './phase-form.component.html',
  styleUrls: ['./phase-form.component.css']
})
export class PhaseFormComponent implements OnInit {

  phase: Phase= new Phase("nom", "done");
  message:any;


  constructor(private service:PhaseService, private route:Router, private location: Location) { }

  ngOnInit() {
    this.phase=this.service.phase;
  }

  public save(){

    if(this.phase.id==undefined){
      let resp=this.service.addPhase(this.phase);
      resp.subscribe((data)=>this.message=data);
      this.location.back();
    }

    else {
      let resp=this.service.updatePhase(this.phase);
      resp.subscribe((data)=>this.message=data);
      this.location.back();
    }

  }

}
