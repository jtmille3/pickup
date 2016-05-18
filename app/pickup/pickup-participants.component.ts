import { Component, Input, OnInit, Inject } from '@angular/core';

import { Event } from '../event';
import { Participant } from '../participant';

@Component({
  selector: 'pickup-participants',
  templateUrl: 'app/pickup/pickup-participants.component.html',
  styleUrls: ['app/pickup/pickup-participants.component.css']
})
export class PickupParticipantsComponent implements OnInit {

  @Input() events: Event[];

  private me: Participant;

  constructor(@Inject('USER_ID') private USER_ID:string) {}

  ngOnInit() {
    this.me = new Participant();
    this.me.participantId = this.USER_ID;
    this.me.name = this.USER_ID;
  }

  onAddMe(event:Event) {
    if(_.contains(event.participants, this.me)) {
      return;
    }

    event.participants.push(this.me);
  }

  onRemoveMe(event:Event) {
    event.participants = _.without(event.participants, this.me);
  }
}
