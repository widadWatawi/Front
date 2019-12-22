import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {Projet} from "../../projet";
import {error} from "util";

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})

export class ListProjectComponent implements OnInit {

  projets:any
  constructor(private service:ProjectService) { }

  ngOnInit() {
    let resp=this.service.getProjects();
    resp.subscribe((projets)=>{
      console.log(projets);
    })
    /*
    this._projectService.getProjects().subscribe((projets)=>{
      this.projets=projets;
      console.log(this.projets);
      },(error)=>{
      console.log(error);
    })
    */

  }

}
