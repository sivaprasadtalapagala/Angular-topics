// user.actions.ts
import { createAction, props } from '@ngrx/store';
// import { User } from '../models/user.model';

export const loadUsers = createAction('[User Page] Load Users');
export const loadUsersSuccess = createAction(
  '[User API] Load Users Success',
  // props<{ users: User[] }>()
);
