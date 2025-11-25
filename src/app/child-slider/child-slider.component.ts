import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-slider',
  templateUrl: './child-slider.component.html',
  styleUrls: ['./child-slider.component.scss']
})
export class ChildSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   amounts = [10, 20, 30, 50000, 75000, 250000];

  onIndexChange(idx: number) {
    console.log('selected index', idx, 'value', this.amounts[idx]);
  }

  onItemChange(item: any) {
    // item is number in our example; if you passed objects, item could be object
    console.log('selected item', item);
  }

}
