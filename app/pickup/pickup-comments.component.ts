import { Component, Input, OnInit } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'pickup-comments',
  templateUrl: 'app/pickup/pickup-comments.component.html',
  styleUrls: ['app/pickup/pickup-comments.component.css'],
  inputs: ['sport']
})
export class PickupCommentsComponent implements OnInit {

  @Input() sport: Sport;

  constructor() {}

  ngOnInit() {
    console.log(this.sport);
  }
}
