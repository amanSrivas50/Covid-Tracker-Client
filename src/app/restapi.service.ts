import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from "@angular/common/http";
import { UserInfo } from './login/user';

@Injectable()
export class RestapiService {

  secure:any;

  constructor( private http:HttpClient ) { }

  public  login( User: UserInfo ){

     return this.http.post("http://localhost:8080/covid/login",User,{responseType:"text"});

  }
  public getinfo(state:number,time:number){
    const header= new HttpHeaders({Authorization:this.secure},);
    return this.http.get("http://localhost:8080/covid/"+state+"/"+time , { headers:header, responseType:"text" } );
  }

}
