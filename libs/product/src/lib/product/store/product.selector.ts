import {
    createFeature,
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import {  productReducer} from './product.reducer';
import { ProductState } from '../models/ProductState';

const productFeatureKey = 'product'

export const selectProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const selectProducts = createSelector(
    selectProductState,
    (state) => state.products
);


export const productFeature = createFeature({
    name: productFeatureKey,
    reducer: productReducer,
});
