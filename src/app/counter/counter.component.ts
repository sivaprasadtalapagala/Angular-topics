import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter:number = 0;
  inputValue!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  onIncreament() {
    this.counter ++
  }

  onDecrement() {
     this.counter --
  }

  onSubmit(value: any) {
    this.inputValue = value
  }
  

}
