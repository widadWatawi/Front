import { Component, OnInit } from '@angular/core';
import {PhaseService} from "../../shared_services/phase.service";
import {AffectationService} from "../../shared_services/affectation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affectation-list',
  templateUrl: './affectation-list.component.html',
  styleUrls: ['./affectation-list.component.css']
})
export class AffectationListComponent implements OnInit {

  personnels:any;

  constructor(private service:AffectationService, private route:Router) { }

  ngOnInit() {

      let resp=this.service.getChefs();
      resp.subscribe((data)=>this.personnels=data);
      this.service.projet_id=null;


  }

  public affecter(id:number){

      let resp = this.service.AffecterChef(id);
      resp.subscribe((data) => this.personnels = data);
      this.route.navigate(['/search']);
    }


}
