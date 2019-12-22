import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";

@Component({
  selector: 'app-project-search-delete',
  templateUrl: './project-search-delete.component.html',
  styleUrls: ['./project-search-delete.component.css']
})
export class ProjectSearchDeleteComponent implements OnInit {

  projets:any;


  constructor(private service:ProjectService) { }

  public deleteProject(id:number){
    let resp= this.service.deleteProject(id);
    resp.subscribe((data)=>this.projets=data);
  }

  ngOnInit() {
    let resp=this.service.getProjects();
    resp.subscribe((data)=>this.projets=data);
  }

}
