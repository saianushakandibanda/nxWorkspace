import { createAction, props } from '@ngrx/store';
import { Categories } from '../models/category-list';

export const getCategories = createAction("[Category] Get Categories")
export const getCategoriesSuccess = createAction("[Category] Get Categories Success",props<{categories:string[]}>())
export const getCategoriesFailure = createAction("[Category] Get Categories Failure",props<{error:string}>())