import { Component, OnInit } from '@angular/core';
import { CompDataTransferService } from '../comp-data-transfer.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.scss']
})
export class CompBComponent implements OnInit {
  data:string = "i am from component B"

  constructor(
    private datatranserservice: CompDataTransferService
  ) { }

  

  ngOnInit(): void {
    this.transferToCompA();
  }

  transferToCompA() {
    this.datatranserservice.setData(this.data);

  }

}
