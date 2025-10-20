import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  sendToParent ="I am from parent component loaded through child"
  output_eevent_from_child: any;

  constructor() { }

  ngOnInit(): void {
  }

  messageFromChild(message:any) {
console.log("recied from child:",message)
  }


  parentVariable="i am from parent component==="

  onchilddataReceived(value: any) {
   this.output_eevent_from_child = value;
  }

  


}
