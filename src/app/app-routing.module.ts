import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { CounterComponent } from './counter/counter.component';
import { ChildComponent } from './decorators/child/child.component';
import { ParentComponent } from './decorators/parent/parent.component';

const routes: Routes = [
  {'path': 'header',component:HeaderComponent},
  {'path': 'home',component:HomeComponent},
  {'path': 'userInfo',component:UserCardComponent},
  {'path': 'counter', component:CounterComponent},
  {'path': 'child', component:ChildComponent},
  {'path': 'parent', component:ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
