import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';

import { Participant } from '../participant/participant';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() participants: Participant[];
  @Output() participantsChange:EventEmitter<Participant[]> = new EventEmitter() // an event emitter

  constructor(@Inject('USER_ID') private USER_ID:Participant) {}

  ngOnInit() {}

  onRemove(participant:Participant) {
    if(participant.participantId !== this.USER_ID.participantId) {
      return;
    }
    this.participants = _.without(this.participants, participant);
    this.participantsChange.emit(this.participants);
  }
}
