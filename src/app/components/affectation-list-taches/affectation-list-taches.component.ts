import { Component, OnInit } from '@angular/core';
import {AffectationService} from "../../shared_services/affectation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affectation-list-taches',
  templateUrl: './affectation-list-taches.component.html',
  styleUrls: ['./affectation-list-taches.component.css']
})
export class AffectationListTachesComponent implements OnInit {
  personnels:any;

  constructor(private service:AffectationService, private route:Router) { }

  ngOnInit() {

      let resp=this.service.getEmployees()
      resp.subscribe((data)=>this.personnels=data);

  }

  public affecter(id:number){

      let resp = this.service.AffecterEmployees(id);
      resp.subscribe((data) => this.personnels = data);
      this.route.navigate(['/taches']);

  }


}
