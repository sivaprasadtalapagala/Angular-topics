import { Component, OnInit } from '@angular/core';
import { userDetails } from 'src/app/model/userModel';

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


  customer_details:userDetails[] = [
    {
      'user_profile': 'https://tse1.mm.bing.net/th/id/OIP.vZZf6JjJn5BozUp2saiTrwHaEc?pid=Api&P=0&h=180',
      'userName':'Ys Raja sekhar reddy',
      'user_age': 65,
      
    },
    {
    user_profile: 'https://randomuser.me/api/portraits/men/11.jpg',
    userName: 'Y. S. Jagan Mohan Reddy',
    user_age: 49,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/12.jpg',
    userName: 'N. Chandrababu Naidu',
    user_age: 70,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/13.jpg',
    userName: 'K. Chandrasekhar Rao',
    user_age: 67,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/14.jpg',
    userName: 'Pawan Kalyan',
    user_age: 50,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/15.jpg',
    userName: 'Revanth Reddy',
    user_age: 53,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/16.jpg',
    userName: 'Somu Veerraju',
    user_age: 58,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/17.jpg',
    userName: 'K. Raghu Ramakrishna Raju',
    user_age: 55,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/18.jpg',
    userName: 'Adala Prabhakar Reddy',
    user_age: 60,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/19.jpg',
    userName: 'Mekapati Goutham Reddy',
    user_age: 50,
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/20.jpg',
    userName: 'Y. S. Vivekananda Reddy',
    user_age: 61,
  }
  ]
}
