import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-card',
  templateUrl: './sales-card.component.html',
  styleUrls: ['./sales-card.component.css']
})
export class SalesCardComponent implements OnInit {

  constructor() { }

  city1 = "San Francisco";
  city2 = "Los Angeles";
  city3 = "San Diego";
  number1 = "1,456";
  number2 = "1,123";
  number3 = "1,026";
  value1 = "90";
  value2 = "70";
  value3 = "60";


  ngOnInit() {
  }

}
