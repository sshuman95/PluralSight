import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import * as AppState from '../../state/app.state';
import { Product } from '../product';
import { ProductActions } from './product.actions';

export interface ProductState {
  showProductCode: boolean;
  products: Product[];
  currentProduct: Product;
}

export interface State extends AppState.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCode: false,
  products: [],
  currentProduct: null,
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCode, (state) => {
    return {
      ...state,
      showProductCode: !state.showProductCode,
    };
  }),
  on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProduct: action.product,
    };
  }),
  on(ProductActions.initCurrentProduct, (state) => {
    return {
      ...state,
      currentProduct: {
        id: 0,
        productName: '',
        productCode: '',
        description: '',
        starRating: 0,
      },
    };
  }),
  on(ProductActions.clearSelectedProduct, (state) => {
    return {
      ...state,
      currentProduct: null,
    };
  })
);

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  (state) => state.showProductCode
);

export const getProducts = createSelector(
  getProductFeatureState,
  (state) => state.products
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  (state) => state.currentProduct
);

// export const getCurrentProductById = createSelector(
//   getProductFeatureState,
//   (state) => state.currentProductId
// );

// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   getCurrentProductById,
//   (state, currentProductId) =>
//     state.products.find((p) => p.id === currentProductId)
// );
