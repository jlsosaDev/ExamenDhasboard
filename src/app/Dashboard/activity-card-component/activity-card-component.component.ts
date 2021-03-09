import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-card-component',
  templateUrl: './activity-card-component.component.html',
  styleUrls: ['./activity-card-component.component.css']
})
export class ActivityCardComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  color1 = "primary";
  color2 = "accent";
  fecha_1 = "22 Nov";
  fecha_2 = "17 Nov";
  fecha_3 = "15 Nov";
  fecha_4 = "12 Nov";
  texto_1 = "Respond to need 'Voluntaree activities'";
  texto_2 = "Everyone realizes why a new common language would be desiriable'";
  texto_3 = "Joined to Group 'Boardsmanship Forum";
  texto_4 = "Responsed to need 'In-Kind Oportunity'";
}
