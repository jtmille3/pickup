import { Component, OnInit } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'pickup-list',
  templateUrl: 'app/pickup/pickup-list.component.html',
  styleUrls: ['app/pickup/pickup-list.component.css'],
  inputs: ['sport']
})
export class PickupListComponent implements OnInit {

  sport: Sport;

  constructor() {}

  ngOnInit() {}
}
