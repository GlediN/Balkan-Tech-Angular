import { Injectable } from '@angular/core';
import { environmentVar } from "../enovironment-variables/environment-var";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = environmentVar.apiUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.url}/category/get`);
  }

  addCategory(category: { name: string, photo?: string, parentId?: string }): Observable<any> {
    return this.http.post(`${this.url}/category/add`, category);
  }

  updateCategory(category: { id: number, name: string, photo: string, parentId: string }): Observable<any> {
    return this.http.put(`${this.url}/category/update`, category);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.url}/category/delete/${categoryId}`);
  }

  getMainCategories(): Observable<any> {
    return this.http.get(`${this.url}/category/main-category`);
  }

  getSubCategories(): Observable<any> {
    return this.http.get(`${this.url}/category/sub-category`);
  }
}
