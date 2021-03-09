import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-network-icon',
  templateUrl: './social-network-icon.component.html',
  styleUrls: ['./social-network-icon.component.css']
})
export class SocialNetworkIconComponent implements OnInit {

  @Input() icon: string;
  @Input() color: string;
  @Input() texto1: string;
  @Input() texto2: string;

  constructor() { }

  ngOnInit() {
  }

}
