import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  projet_id: number
  tache_id: number

  constructor(private http:HttpClient) { }

  getChefs(){
    return this.http.get("http://localhost:8081/personnel/chefs");
  }

  getEmployees(){
    return this.http.get("http://localhost:8081/personnel/employees");
  }

  public AffecterChef(id){
    return this.http.get("http://localhost:8081/personnel/affecterProjet/"+this.projet_id+"/"+id);
  }

  public AffecterEmployees(id){
    return this.http.get("http://localhost:8081/personnel/affecterTache/"+this.tache_id+"/"+id);
  }

}
