import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { UserActions } from './user.actions';

export interface UserState {
  showMask: boolean;
}

const initialState: UserState = {
  showMask: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.toggleUserMask, (state) => {
    return {
      ...state,
      showMask: !state.showMask,
    };
  })
);

const userFeatureState = createFeatureSelector<UserState>('users');

export const getShowMask = createSelector(
  userFeatureState,
  (state) => state.showMask
);
