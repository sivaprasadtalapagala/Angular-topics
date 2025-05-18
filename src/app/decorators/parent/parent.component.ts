import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  sendToParent ="I am from parent component loaded through child"

  constructor() { }

  ngOnInit(): void {
  }

  messageFromChild(message:any) {
console.log("recied from child:",message)
  }

}
