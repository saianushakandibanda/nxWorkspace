import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../services/product.service";
import { productActions } from "./product.actions";
import { exhaustMap, map, of } from "rxjs";

export const loadProductsByCategory = createEffect(
    (actions$ = inject(Actions), productService = inject(ProductService)) => {
      return actions$.pipe(
        ofType(productActions.loadProduct),
        exhaustMap((action) =>
          productService.getProductByCategory().pipe(
            map((products:any) => productActions.productSuccess({ products }))
          )
        )
      );
    },
    { functional: true ,dispatch: true}
  );