import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompDataTransferService {

  private dataSource = new BehaviorSubject<any>(null);
  currentData = this.dataSource.asObservable();
  // private dataSource = 'prasad';
  constructor() { }

  setData(data:any) {
    // this.dataSource = data;
    // console.log("service file",this.dataSource)
    this.dataSource.next(data);
  }

  getData() {
    return this.dataSource;
  }
}
