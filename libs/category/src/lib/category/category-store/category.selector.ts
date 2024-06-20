import {
    createFeature,
    createFeatureSelector,
    createSelector,
} from '@ngrx/store';
import { categoryReducer } from './category.reducer';
import { Categories } from '../models/category-list';

const categoryFeatureKey = 'category'

export const selectCategoryState = createFeatureSelector<Categories>(categoryFeatureKey);

export const selectCategories = createSelector(
    selectCategoryState,
    (state) => state.categories
);
export const selectCategoryError = createSelector(
    selectCategoryState,
    (state) => state.error
);

export const categoryFeature = createFeature({
    name: categoryFeatureKey,
    reducer: categoryReducer,
});
