// user.effects.ts
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
// import { UserService } from '../services/user.service';
// import { loadUsers, loadUsersSuccess } from './user.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {}

  // loadUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(loadUsers),
  //     mergeMap(() =>
  //       this.userService.getUsers().pipe(
  //         map(users => loadUsersSuccess({ users }))
  //       )
  //     )
  //   )
  // );
}
