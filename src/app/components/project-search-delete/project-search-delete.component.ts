import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../shared_services/project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-search-delete',
  templateUrl: './project-search-delete.component.html',
  styleUrls: ['./project-search-delete.component.css']
})
export class ProjectSearchDeleteComponent implements OnInit {

  projets:any;
  name:string;

  constructor(private service:ProjectService, private route:Router) { }

  public deleteProject(id:number){
    let resp= this.service.deleteProject(id);
    resp.subscribe((data)=>this.projets=data);
  }

  public updateProject(projet){
    this.service.projet=projet;
    this.route.navigate(['/register']);
  }

  public findProjectByName(){
    let resp= this.service.getProjectByName(this.name);
    resp.subscribe((data)=>this.projets=data);

  }

  ngOnInit() {
    let resp=this.service.getProjects();
    resp.subscribe((data)=>this.projets=data);
  }

}
