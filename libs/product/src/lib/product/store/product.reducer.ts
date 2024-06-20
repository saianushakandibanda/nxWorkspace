import { createReducer, on } from '@ngrx/store';
import { Products } from '../models/ProductData';
import { productActions } from './product.actions';
import { ProductState } from '../models/ProductState';

export const initialState: ProductState = {
  products: [],
  productCount: 0,
  error: '',
};

export const productReducer = createReducer(
  initialState,
  on(productActions.productSuccess, (state, action) => ({
    ...state,
    products: action.products,
    productCount: action.products.length,
    error: '',
  })),
  on(productActions.productFailure, (state, action) => ({
    ...state,
    products: [],
    productCount: 0,
    error: action.error,
  }))
);
