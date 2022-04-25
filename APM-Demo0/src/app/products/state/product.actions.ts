import { createAction, props } from '@ngrx/store';
import { create } from 'domain';
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

const updateProductSuccess = createAction(
  '[Product] Product Updated Success',
  props<{ product: Product }>()
);

const updateProductError = createAction(
  '[Product] Product Updated Error',
  props<{ error: string }>()
);

const saveProduct = createAction(
  '[Product] Product Saved',
  props<{ product: Product }>()
);

const saveProductSuccess = createAction(
  '[Product] Product Saved Success',
  props<{ product: Product }>()
);

const saveProductError = createAction(
  '[Product] Product Saved Errror',
  props<{ error: string }>()
);

const deleteProduct = createAction(
  '[Product] Product Deleted',
  props<{ product: Product }>()
);

const deleteProductSuccess = createAction(
  '[Product] Product Deleted Success',
  props<{ product: Product }>()
);

const deleteProductError = createAction(
  '[Product] Product Deleted Errror',
  props<{ error: string }>()
);
export const ProductActions = {
  toggleProductCode: toggleProductCode,
  setCurrentProduct: setCurrentProduct,
  clearSelectedProduct: clearSelectedProduct,
  initCurrentProduct: initCurrentProduct,
  loadProducts: loadProducts,
  loadProductsError: loadProductsError,
  loadProductsSuccess: loadProductsSuccess,
  saveProduct: saveProduct,
  saveProductSuccess: saveProductSuccess,
  saveProductError: saveProductError,
  updateProduct: updateProduct,
  updateProductSuccess: updateProductSuccess,
  updateProductError: updateProductError,
  deleteProduct: deleteProduct,
  deleteProductSuccess: deleteProductSuccess,
  deleteProductError: deleteProductError,
};
