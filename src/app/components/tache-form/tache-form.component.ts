import { Component, OnInit } from '@angular/core';
import {Tache} from "../../tache";
import { TacheService} from "../../shared_services/tache.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {Phase} from "../../phase";

@Component({
  selector: 'app-tache-form',
  templateUrl: './tache-form.component.html',
  styleUrls: ['./tache-form.component.css']
})
export class TacheFormComponent implements OnInit {

  tache: Tache= new Tache("nom");
  message:any;

  constructor(private service:TacheService, private route:Router, private location: Location) { }

  ngOnInit() {
    this.tache=this.service.tache;
  }

  public save(){

    if(this.tache.id==undefined){
      let resp=this.service.addTache(this.tache);
      resp.subscribe((data)=>this.message=data);
      this.location.back();
    }

    else {
      let resp=this.service.updateTache(this.tache);
      resp.subscribe((data)=>this.message=data);
      this.location.back();
    }

  }

}
