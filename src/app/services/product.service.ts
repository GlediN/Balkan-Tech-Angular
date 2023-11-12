import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environmentVar} from "../enovironment-variables/environment-var";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environmentVar.apiUrl;
  constructor(private http: HttpClient) {}

  getMostSoldProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+"/product/get");
  }
}
