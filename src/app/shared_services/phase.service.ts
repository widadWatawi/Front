import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Projet} from "../projet";
import {Phase} from "../phase";


@Injectable({
  providedIn: 'root'
})

export class PhaseService {

  phase: Phase= new Phase("nom", "done");
  projet_id: number
  constructor(private http:HttpClient) { }

  getPhases(projet_id){
    return this.http.get("http://localhost:8081/api/projets/"+projet_id+"/phase");
  }


  public addPhase(phase){
   // Map<Phase, Number> data = {phase:phase, project_id:this.projet_id};
    return this.http.post("http://localhost:8081/api/phase/new?project_id="+this.projet_id,phase,{responseType:'text' as 'json'});
  }

  public updatePhase(phase){
    return this.http.put("http://localhost:8081/api/phase/update",phase,{responseType:'text' as 'json'});
  }

  public deletePhase(id){
    return this.http.get("http://localhost:8081/api/phase/cancel/"+id+"?project_id="+this.projet_id);
  }

  public getPhaseByName(name){
    return this.http.get("http://localhost:8081/api/phases/search/"+name);
  }

}
