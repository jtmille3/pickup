import { Component, Input, OnInit, Inject } from '@angular/core';

import { Participant } from '../participant/participant';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() participants: Participant[];

  constructor(@Inject('USER_ID') private USER_ID:Participant) {}

  ngOnInit() {
    console.log('Participants', this.participants);
  }
}
