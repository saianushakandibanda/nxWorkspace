import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Products } from "../models/ProductData";

export const productActions = createActionGroup({
    source: 'Product',
    events: {
      'Load Product': emptyProps(),
      'Load Product By Category': emptyProps(),
      'Product Success': props<{ products: Products[] }>(),
      'Product Failure': props<{ error: string }>(),
      'Add To Cart' : props<{cartItem:Products}>()
    },
})
// export const getProducts = createAction("[Product] Get Products by Category")
// export const getProductsSuccess = createAction("[Product] Get Products Success")
// export const getProductsFailure = createAction("[Product] Get Products Failure")