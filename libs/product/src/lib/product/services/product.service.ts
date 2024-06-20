import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentCategory } from '@nx-workspace/category';
import { switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http:HttpClient,public store:Store) { }

  getProductByCategory() {
    return this.store.select(selectCurrentCategory).pipe(
      switchMap((catName: string) => {
        return this.http.get<any[]>('https://fakestoreapi.com/products/category/' + catName);
      })
    );
  }
}
