import { createAction } from "@ngrx/store"

const toggleUserMask = createAction('[User] Toggle User Mask');


export const UserActions = {
  toggleUserMask:toggleUserMask
}
