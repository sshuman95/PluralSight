import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

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
}
