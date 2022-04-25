import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap } from 'rxjs/operators';

import { ProductService } from '../product.service';
import { ProductActions } from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap((action) => {
        return this.productService.getProducts().pipe(
          map((data) => ProductActions.loadProductsSuccess({ products: data })),
          catchError((err: string) => {
            return of(ProductActions.loadProductsError({ error: err }));
          })
        );
      })
    );
  });

  updateProduct$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.updateProduct),
      concatMap((action) => {
        return this.productService.updateProduct(action.product).pipe(
          map((data) => ProductActions.updateProductSuccess({ product: data })),
          catchError((err) => of(ProductActions.updateProductError(err)))
        );
      })
    );
  });

  saveProduct$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.saveProduct),
      concatMap((action) => {
        return this.productService.createProduct(action.product).pipe(
          map((data) => ProductActions.saveProductSuccess({ product: data })),
          catchError((err) =>
            of(ProductActions.saveProductError({ error: err }))
          )
        );
      })
    );
  });

  deleteProduct$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.deleteProduct),
      concatMap((action) => {
        return this.productService.deleteProduct(action.product.id).pipe(
          map((data) =>
            ProductActions.deleteProductSuccess({ product: action.product })
          ),
          catchError((err) =>
            of(ProductActions.deleteProductError({ error: err }))
          )
        );
      })
    );
  });
}
