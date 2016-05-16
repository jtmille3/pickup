import { Component, Input, OnInit } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'pickup-list',
  templateUrl: 'app/pickup/pickup-list.component.html',
  styleUrls: ['app/pickup/pickup-list.component.css'],
  inputs: ['sport']
})
export class PickupListComponent implements OnInit {

  @Input() sport: Sport;

  constructor() {}

  ngOnInit() {
    console.log(this.sport);
  }
}
