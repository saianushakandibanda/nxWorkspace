import { createAction, props } from '@ngrx/store';

export const getCategories = createAction("[Category] Get Categories")
export const getCategoriesSuccess = createAction("[Category] Get Categories Success",(categories: string[]) => ({ categories }))
export const getCategoriesFailure = createAction("[Category] Get Categories Failure",props<{error:string}>())
export const setCurrentCategory = createAction("[Category] Set Current Category",props<{category:string}>())