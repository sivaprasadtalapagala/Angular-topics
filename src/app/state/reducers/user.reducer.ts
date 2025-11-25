// user.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from '../actions/user.actions';


export interface UserState {
  // users: User[];
}

export const initialState: UserState = { users: [] };

export const userReducer = createReducer(
  initialState,
  // on(loadUsersSuccess, (state, { users }) => ({ ...state, users }))
);
