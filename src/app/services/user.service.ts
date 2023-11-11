import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environmentVar} from "../enovironment-variables/environment-var";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environmentVar.apiUrl;

  constructor(private httpClient:HttpClient) { }


    login(data: any): Observable<any> {
        return this.httpClient.post(this.url + "/login", data, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }


    signup(data: any): Observable<any> {
        return this.httpClient.post(this.url + "/signup", data, {
            headers: new HttpHeaders().set('Content-Type', 'application/json')
        });
    }
  checkToken(){
    return this.httpClient.get(this.url +"/checkToken");
  }


}
