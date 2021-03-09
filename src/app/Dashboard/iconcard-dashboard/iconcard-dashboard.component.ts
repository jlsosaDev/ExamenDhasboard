import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconcard-dashboard',
  templateUrl: './iconcard-dashboard.component.html',
  styleUrls: ['./iconcard-dashboard.component.css']
})
export class IconcardDashboardComponent implements OnInit {

  @Input() texto1: string;
  @Input() texto2: string;
  @Input() iconname: string;

  constructor() { }

  ngOnInit() {
  }

}
