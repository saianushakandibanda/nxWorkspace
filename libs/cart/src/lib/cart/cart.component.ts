import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { productFeature } from '@nx-workspace/product';
import { Store } from '@ngrx/store';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(public store:Store){
    
  }
  cartItems$ = this.store.select(productFeature.selectCartItems)
}
