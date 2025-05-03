import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  getDataFromService(){
    const name="siva";
    return name
  }
}
