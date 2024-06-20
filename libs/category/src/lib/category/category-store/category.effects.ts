import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../services/category.service';
import {
    getCategories,
    getCategoriesSuccess,
  } from './category.action';


@Injectable()
export class CategoriesEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
  ) {}

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCategories),
      exhaustMap(() =>
        this.categoryService.getAllCategories().pipe(
          map((cat:any) => getCategoriesSuccess(cat)),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
