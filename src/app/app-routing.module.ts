import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user/user-card/user-card.component';

const routes: Routes = [
  {'path': 'header',component:HeaderComponent},
  {'path': 'home',component:HomeComponent},
  {'path': 'userInfo',component:UserCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
