import { Component, Input, OnInit } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css'],
  inputs: ['sport']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() sport: Sport;

  constructor() {}

  ngOnInit() {
    console.log(this.sport);
  }
}
