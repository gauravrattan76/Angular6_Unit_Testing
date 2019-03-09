import { Component,OnInit } from '@angular/core';
import {TestServiceService} from './test-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:any[];
  constructor(private _testServiceService:TestServiceService)
  {

  }

  ngOnInit(){
    return this._testServiceService.getEmployee().subscribe(data1 =>
     console.log(data1) )
  }

}
