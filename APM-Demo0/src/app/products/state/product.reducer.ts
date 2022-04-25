import { state } from '@angular/animations';
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
  currentProductId: number;
  status: string;
}

export interface State extends AppState.State {
  products: ProductState;
}

const initialState: ProductState = {
  showProductCode: false,
  products: [],
  currentProductId: null,
  status: '',
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
      currentProductId: action.product.id,
    };
  }),
  on(ProductActions.initCurrentProduct, (state) => {
    return {
      ...state,
      currentProductId: 0,
    };
  }),
  on(ProductActions.clearSelectedProduct, (state) => {
    return {
      ...state,
      currentProductId: null,
    };
  }),
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
      status: '',
    };
  }),
  on(ProductActions.loadProductsError, (state, action) => {
    return {
      ...state,
      products: [],
      status: action.error,
    };
  }),
  on(ProductActions.updateProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products].map((p) => {
        if (p.id !== action.product.id) {
          return { ...p };
        }
        return { ...p, ...action.product };
      }),
      currentProductId: action.product.id,
    };
  }),
  on(ProductActions.updateProductError, (state, action) => {
    return {
      ...state,
      status: action.error,
    };
  }),
  on(ProductActions.saveProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products, action.product],
      currentProductId: action.product.id,
    };
  }),
  on(ProductActions.saveProductError, (state, action) => {
    return {
      ...state,
      status: action.error,
    };
  }),
  on(ProductActions.deleteProductSuccess, (state, action) => {
    return {
      ...state,
      products: [...state.products].filter((p) => p.id !== action.product.id),
      currentProductId: null,
    };
  }),
  on(ProductActions.deleteProductError, (state, action) => {
    return {
      ...state,
      currentProductId: null,
      status: action.error,
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
  getProducts,
  (state) => {
    if (state.currentProductId === 0) {
      return {
        id: 0,
        productName: '',
        productCode: 'New',
        description: '',
        starRating: 0,
      };
    }
    return state.currentProductId
      ? state.products.find((p) => p.id === state.currentProductId)
      : null;
  }
);

export const getError = createSelector(
  getProductFeatureState,
  (state) => state.status
);
