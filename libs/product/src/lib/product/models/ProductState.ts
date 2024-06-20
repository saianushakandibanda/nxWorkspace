import { Products } from "./ProductData";

export interface ProductState {
    products: Products[];
    productCount: number;
    error: string;
    cartItems:Products[]
  }