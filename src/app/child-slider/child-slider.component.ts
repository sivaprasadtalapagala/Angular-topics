import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-slider',
  templateUrl: './child-slider.component.html',
  styleUrls: ['./child-slider.component.scss']
})
export class ChildSliderComponent implements OnInit {
sumInsured = 130000; 
  constructor() { }

  ngOnInit(): void {
  }

}
