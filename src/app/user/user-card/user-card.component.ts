import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  constructor() { }
  user_profile: string ='https://tse1.mm.bing.net/th/id/OIP.vZZf6JjJn5BozUp2saiTrwHaEc?pid=Api&P=0&h=180'
  userName: string ="siva";
  user_age: number = 20
  comments!: string;

  // commentsEdited = 'good'

  ngOnInit(): void {
  }

  onUserProfileEdit() {
    console.log("profile edited")
  }

  onUserProfileDeleted() {
    console.log("profile deleted")
  }
}
