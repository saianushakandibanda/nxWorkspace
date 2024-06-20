import {
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
} from './category.action';
import { Categories } from '../models/category-list';
import { createReducer, on } from '@ngrx/store';

export const initialState: Categories = {
  categories: [],
  currentCategory: '',
  error:''
};

export const categoryReducer = createReducer(
  initialState,
  on(getCategoriesSuccess, (state, props) => {
    return {
      ...state,
      categories: props.categories,
      error: ''
    };
  }),

  on(getCategoriesFailure,(state,props)=>{
    return {
        ...state,
        categories:[],
        error:props.error
    }
  }),

);
