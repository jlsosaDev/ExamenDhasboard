import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-face-book-icon',
  templateUrl: './card-face-book-icon.component.html',
  styleUrls: ['./card-face-book-icon.component.css']
})
export class CardFaceBookIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialNetworkName1 = "Facebook";
  socialNetworkName2 = "Twitter";
  socialNetworkName3 = "Instagram";
  socialNetworkCount1 = "125 sales";
  socialNetworkCount2 = "112 sales";
  socialNetworkCount3 = "105 sales";
  color1 = "primary";
  color2 = "accent";
  color3 = "warn";
  icon1="facebook";
  icon2="star";
  icon3="star_border";


}
