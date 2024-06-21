import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { loadProductsByCategory, productFeature } from '@nx-workspace/product';
import { authGuard } from '@nx-workspace/login';
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'category/:categoryName',
    loadComponent: () =>
      import('@nx-workspace/product').then((m) => m.ProductComponent),
    providers: [
      provideState(productFeature),
      provideEffects({ loadProductsByCategory }),
    ],
    canMatch: [authGuard],
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('@nx-workspace/cart').then((m) => m.CartComponent),
    canMatch: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@nx-workspace/login').then((m) => m.LoginComponent),
  },
];
