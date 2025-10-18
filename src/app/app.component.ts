import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'using interpolation';
  username = "siva"
  

  constructor (
    private rani:CommonServiceService
  ) {
    const userName = this.rani.getDataFromService();
    console.log("User_constructor:",userName);
   

  }

  ngOnInit() {
    console.log("ngOnitdata")
    this.getData();
  }

  getData(){
    // console.log("getData_data")
  }


  
}
