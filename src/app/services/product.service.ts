import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {environmentVar} from "../enovironment-variables/environment-var";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  categoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environmentVar.apiUrl;
  constructor(private http: HttpClient) {}

    getMostSoldProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url+"/product/most-sold-products");
    }

  addProduct(productData: any): Observable<string> {
    return this.http.post<string>(`${this.url}/product/add`, productData);
  }

  updateProduct(productData: any): Observable<string> {
    return this.http.post<string>(`${this.url}/product/update`, productData);
  }

  deleteProduct(productId: number): Observable<string> {
    return this.http.post<string>(`${this.url}/product/delete/${productId}`, {});
  }

  getProductsByCategory(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/product/category/${id}`);
  }
    getProductsBySearch(searchParam: string): Observable<Product[]> {
    const url = `${this.url}/product/search/${searchParam}`;
    return this.http.post<Product[]>(url, {});
  }

  getProductsById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/product/getById/${id}`);
  }

}
