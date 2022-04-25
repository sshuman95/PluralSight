import { createAction, props } from '@ngrx/store';
import { Product } from '../product';

const toggleProductCode = createAction('[Product] Toggle Product Code');

const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);

const clearSelectedProduct = createAction('[Product] Clear Selected Product');

const initCurrentProduct = createAction('[Product] Init Current Product');

const loadProducts = createAction('[Product] Loading');

const loadProductsError = createAction(
  '[Product] Error',
  props<{ error: string }>()
);

const loadProductsSuccess = createAction(
  '[Product] Success',
  props<{ products: Product[] }>()
);

const updateProduct = createAction(
  '[Product] Product Updated',
  props<{ product: Product }>()
);

const saveProduct = createAction(
  '[Product] Product Saved',
  props<{ product: Product }>()
);

export const ProductActions = {
  toggleProductCode: toggleProductCode,
  setCurrentProduct: setCurrentProduct,
  clearSelectedProduct: clearSelectedProduct,
  initCurrentProduct: initCurrentProduct,
  loadProducts: loadProducts,
  loadProductsError: loadProductsError,
  loadProductsSuccess: loadProductsSuccess,
  updateProduct: updateProduct,
  saveProduct: saveProduct,
};
