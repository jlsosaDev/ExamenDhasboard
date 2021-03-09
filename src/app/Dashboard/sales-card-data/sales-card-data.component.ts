import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-card-data',
  templateUrl: './sales-card-data.component.html',
  styleUrls: ['./sales-card-data.component.css']
})
export class SalesCardDataComponent implements OnInit {

  @Input() city;
  @Input() number;
  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
