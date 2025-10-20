import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childVariable:any;
  // @Output() outputVariable = new EventEmitter<string>()
  // @Output() messageEvent = new EventEmitter<string>();


  @Input() childProperty!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    // this.messageEvent.emit('hello from child');
  }

  // @Output() new EventEmitter<string>();
  @Output() variableTosendToParent = new EventEmitter<string>();
  

  sendToParent() {
    this.variableTosendToParent.emit("i am from child====")
  }

}
