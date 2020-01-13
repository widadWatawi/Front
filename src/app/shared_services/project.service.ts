import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Projet} from "../projet";


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projet: Projet= new Projet("projet2", 22, "a faire");

  constructor(private http:HttpClient) { }

  getProjects(){
return this.http.get("http://localhost:8081/api/projets");
  }

  public doRegistration(projet){
    return this.http.post("http://localhost:8081/api/register",projet,{responseType:'text' as 'json'});
  }

  public updateProject(projet){
    return this.http.put("http://localhost:8081/api/projets/update",projet,{responseType:'text' as 'json'});
  }


  public getProjectById(id){
    return this.http.get("/api/projets/"+id);
  }


  public getProjectByName(name){
    return this.http.get("http://localhost:8081/api/projets/search/"+name);
  }

  public deleteProject(id){
    return this.http.get("http://localhost:8081/api/cancel/"+id);
  }

  public validerProject(id){
    return this.http.get("http://localhost:8081/api/valider/"+id);
  }

  getPhases(projet_id){
    return this.http.get("http://localhost:8081/api/projets/"+projet_id+"/phase");
  }

  getChefs(){
    return this.http.get("http://localhost:8081/personnel/chefs");
  }




  /*
    getProject(id:Number){
      return this._http.get(this.baseUrl+'/projets'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);

    }

    errorHandler(error:Response){

      return Observable.throw(error||"SERVER ERROR");

    }
    */

}
