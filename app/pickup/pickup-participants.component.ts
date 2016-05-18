import { Component, Input, OnInit, Inject } from '@angular/core';

import { Participant } from '../participant';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() participants: Participant[];

  constructor(@Inject('USER_ID') private USER_ID:string) {}

  ngOnInit() {
    console.log(this.participants);
  }

  onDelete(participant:Participant) {
    // move this into a comment service...
    this.participants = _.without(this.participants, participant);
  }

  onEdit(participant:Participant) {
    if(participant.participantId !== this.USER_ID) {
      return;
    }

    console.log(participant);
  }
}
