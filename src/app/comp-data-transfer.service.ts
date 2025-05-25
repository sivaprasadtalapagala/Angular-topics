import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompDataTransferService {

  // private dataSource = new BehaviorSubject<any>(null);
  private dataSource = 'prasad';
  constructor() { }

  setData(data:any) {
    this.dataSource = data;
    console.log("service file",this.dataSource)
  }

  getData() {
    return this.dataSource;
  }
}
