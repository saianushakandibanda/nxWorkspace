import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(public http: HttpClient) {}

  getAllCategories() {
    return this.http.get("https://fakestoreapi.com/products/categories");
  }
}
