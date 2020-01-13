import { Component, OnInit } from '@angular/core';
import {PhaseService} from "../../shared_services/phase.service";
import {AffectationService} from "../../shared_services/affectation.service";

@Component({
  selector: 'app-affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.css']
})
export class AffectationListComponent implements OnInit {

  personnels:any;

  constructor(private service:AffectationService) { }

  ngOnInit() {

    if(this.service.projet_id==undefined){
      let resp=this.service.getEmployees()
      resp.subscribe((data)=>this.personnels=data);
    }

    else {
      let resp=this.service.getChefs();
      resp.subscribe((data)=>this.personnels=data);

    }

  }

  public affecter(id:number){

    if(this.service.projet_id==undefined) {
      let resp = this.service.AffecterEmployees(id);
      resp.subscribe((data) => this.personnels = data);
    }
    else {
      let resp = this.service.AffecterChef(id);
      resp.subscribe((data) => this.personnels = data);
    }
  }

}
