import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  getProjects(){
return this.http.get("http://localhost:8081/api/projets");
  }

  public doRegistration(projet){
    return this.http.post("http://localhost:8081/api/register",projet,{responseType:'text' as 'json'});
  }


  public getProjectById(id){
    return this.http.get("http://localhost:8081/api/projets/"+id);
  }

  public deleteProject(id){
    return this.http.delete("http://localhost:8081/api/cancel/"+id);
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
