import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  

  


  apiResponse = [
    { name: "Siva", class: 10, age: 25, gender: "Male" },
    { name: "Anjali", class: 9, age: 23, gender: "Female" },
    { name: "Ravi", class: 10, age: 24, gender: "Male" },
    { name: "Meena", class: 8, age: 22, gender: "Female" },
    { name: "Kiran", class: 10, age: 26, gender: "Male" },
    { name: "Pooja", class: 9, age: 21, gender: "Female" },
    { name: "Arjun", class: 7, age: 20, gender: "Male" },
    { name: "Neha", class: 8, age: 23, gender: "Female" },
    { name: "Vikram", class: 9, age: 24, gender: "Male" },
    { name: "Divya", class: 10, age: 22, gender: "Female" }
  ];




  //api response

   studentsList = this.apiResponse;
   //===================================



//interpolation
     
  studentName = "Rani";

  //property binding

  helloProperty ="hello Value";
  isDisabled:boolean =true;

  onInputChange(rani:any) {
    console.log("data receive from input field eventbinding=",rani.target.value)
  }

  //event Binding

  evntBindProperty = "data from ts file"
  onClick() {
  this.isDisabled = false;
  console.log("data from html")
  this.evntBindProperty ="data received from Html"
  }


  transerMethod(value:boolean) {
    console.log("trasfered value:",value)

  }


  //two way data binding

  twoWayValue:any;
  



}
