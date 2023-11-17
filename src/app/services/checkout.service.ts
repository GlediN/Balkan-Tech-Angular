import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environmentVar} from "../enovironment-variables/environment-var";

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url = environmentVar.apiUrl;
  constructor(private httpClient:HttpClient) { }


  checkout(data: any): Observable<any> {
    return this.httpClient.post(this.url + "/checkout", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
