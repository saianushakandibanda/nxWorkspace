import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient) { }

  getProductByCategory(catName:string){
    return this.http.get("https://fakestoreapi.com/products/category/"+catName)
  }
}
