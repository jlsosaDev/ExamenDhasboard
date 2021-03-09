import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-component',
  templateUrl: './activity-component.component.html',
  styleUrls: ['./activity-component.component.css']
})
export class ActivityComponentComponent implements OnInit {

  @Input() color;
  @Input() fecha;
  @Input() texto;
  constructor() { }

  ngOnInit() {
  }
}
