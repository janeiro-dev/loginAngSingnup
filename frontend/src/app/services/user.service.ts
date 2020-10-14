import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiSchema } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService{
  readonly url_api='http://localhost:3000/';
  public allDato:ApiSchema;
  public datos:ApiSchema[];
  public todo:ApiSchema[];


  
  constructor(private http:HttpClient) { 
    this.allDato = new ApiSchema();
    

  }


  postUser(ApiSchema:ApiSchema){
    return this.http.post(this.url_api,ApiSchema);
   
  }

  getUsers(){
    return this.http.get(this.url_api);
  }

  
}
