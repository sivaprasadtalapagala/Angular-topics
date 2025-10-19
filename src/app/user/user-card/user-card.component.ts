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
  // isActive: boolean = true;

  // commentsEdited = 'good'

  ngOnInit(): void {
  }

  onUserProfileEdit() {
    console.log("profile edited")
  }

  onUserProfileDeleted() {
    console.log("profile deleted")
  }


  customer_details: userDetails[] = [
  // AP State Politicians
  {
    user_profile: 'https://tse1.mm.bing.net/th/id/OIP.vZZf6JjJn5BozUp2saiTrwHaEc?pid=Api&P=0&h=180',
    userName: 'Ys Raja sekhar reddy',
    user_age: 65,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/11.jpg',
    userName: 'Y. S. Jagan Mohan Reddy',
    user_age: 49,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/12.jpg',
    userName: 'N. Chandrababu Naidu',
    user_age: 70,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/13.jpg',
    userName: 'K. Chandrasekhar Rao',
    user_age: 67,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/14.jpg',
    userName: 'Pawan Kalyan',
    user_age: 50,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/15.jpg',
    userName: 'Revanth Reddy',
    user_age: 53,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/16.jpg',
    userName: 'Somu Veerraju',
    user_age: 58,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/17.jpg',
    userName: 'K. Raghu Ramakrishna Raju',
    user_age: 55,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/18.jpg',
    userName: 'Adala Prabhakar Reddy',
    user_age: 60,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/19.jpg',
    userName: 'Mekapati Goutham Reddy',
    user_age: 50,
    type: 'state',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/20.jpg',
    userName: 'Y. S. Vivekananda Reddy',
    user_age: 61,
    type: 'state',
  },

  // Central Politicians (India)
  {
    user_profile: 'https://randomuser.me/api/portraits/men/21.jpg',
    userName: 'Narendra Modi',
    user_age: 73,
    type: 'central',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/22.jpg',
    userName: 'Amit Shah',
    user_age: 62,
    type: 'central',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/23.jpg',
    userName: 'Rahul Gandhi',
    user_age: 53,
    type: 'central',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/24.jpg',
    userName: 'Sonia Gandhi',
    user_age: 77,
    type: 'central',
  },

  // International Politicians
  {
    user_profile: 'https://randomuser.me/api/portraits/men/25.jpg',
    userName: 'Joe Biden',
    user_age: 81,
    type: 'international',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/26.jpg',
    userName: 'Barack Obama',
    user_age: 62,
    type: 'international',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/27.jpg',
    userName: 'Boris Johnson',
    user_age: 59,
    type: 'international',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/women/28.jpg',
    userName: 'Angela Merkel',
    user_age: 68,
    type: 'international',
  },
  {
    user_profile: 'https://randomuser.me/api/portraits/men/29.jpg',
    userName: 'Justin Trudeau',
    user_age: 51,
    type: 'international',
  }
];

}
