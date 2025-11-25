import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './decorators/parent/parent.component';
import { ChildComponent } from './decorators/child/child.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserCardComponent } from './user/user-card/user-card.component';
import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    CompAComponent,
    CompBComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserCardComponent,
    CounterComponent,
    UserListComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({userState: userReducer}, {}),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    MatSliderModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
