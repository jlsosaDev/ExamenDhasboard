import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row-icon',
  templateUrl: './row-icon.component.html',
  styleUrls: ['./row-icon.component.css']
})
export class RowIconComponent implements OnInit {

  @Input() color;

  constructor() { }

  ngOnInit() {
  }

}
