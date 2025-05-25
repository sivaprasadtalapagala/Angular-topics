import { Component, OnInit } from '@angular/core';
import { CompDataTransferService } from '../comp-data-transfer.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {
  fdbfnedj: string ='';

  constructor(
    private datatransservice:CompDataTransferService
  ) { }

  ngOnInit(): void {
    this.fdbfnedj = this.datatransservice.getData();
  }

}
