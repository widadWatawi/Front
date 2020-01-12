import { Injectable } from '@angular/core';
import {Tache} from "../tache";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  tache: Tache= new Tache("nom", "statut");
  phase_id: number
  constructor(private http:HttpClient) { }

  getTache(phase_id){
    return this.http.get("http://localhost:8081/api/phases/"+phase_id+"/tache");
  }


  public addTache(tache){

    return this.http.post("http://localhost:8081/api/tache/new?phase_id="+this.phase_id,tache,{responseType:'text' as 'json'});
  }

  public updateTache(tache){
    return this.http.put("http://localhost:8081/api/tache/update",tache,{responseType:'text' as 'json'});
  }

  public deleteTache(id){
    return this.http.get("http://localhost:8081/api/tache/cancel/"+id+"?phase_id="+this.phase_id);
  }

  public getTacheByName(name){
    return this.http.get("http://localhost:8081/api/taches/search/"+name);
  }

  public validerTache(id){
    return this.http.get("http://localhost:8081/api/tache/valider/"+id+"?phase_id="+this.phase_id);
  }


}
