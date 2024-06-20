import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { loadProductsByCategory, productFeature } from '@nx-workspace/product';

export const appRoutes: Route[] = [
  {
    path: 'category/:categoryName',
    loadComponent: () =>
      import('@nx-workspace/product').then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({ loadProductsByCategory }),
    ],
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@nx-workspace/cart').then((m) => m.CartComponent),
  },
];
