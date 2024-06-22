import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { productActions } from './store/product.actions';
import { Store } from '@ngrx/store';
import { productFeature } from './store/product.reducer';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Products } from './models/ProductData';
@Component({
  selector: 'lib-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, AsyncPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  @Input() categoryName: string = '';

  constructor(public http: HttpClient, public store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(productActions.loadProduct());
  }
  products$ = this.store.select(productFeature.selectProducts);
  addToCart(product: Products) {
    this.store.dispatch(productActions.addToCart({cartItem:product}))
  }
}
