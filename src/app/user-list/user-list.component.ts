import { Component, OnInit } from '@angular/core';
import { loadUsers } from '../state/actions/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  // constructor(private store: Store)) { }

  // // users$ = this.store.select(selectAllUsers);


  // ngOnInit() {
  //   this.store.dispatch(loadUsers());
  // }

}
