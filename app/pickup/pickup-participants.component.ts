import { Component, Input, OnInit } from '@angular/core';

import { Participant } from '../participant';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() participants: Participant[];

  constructor() {}

  ngOnInit() {
    console.log(this.participants);
  }
}
