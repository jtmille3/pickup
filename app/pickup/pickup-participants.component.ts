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

  constructor(@Inject('USER_ID') private USER_ID:Participant) {}

  ngOnInit() {
  }

  onAddMe(event:Event) {
    if(_.contains(event.participants, this.USER_ID)) {
      return;
    }

    event.participants.push(this.USER_ID);
  }

  onRemoveMe(event:Event) {
    event.participants = _.without(event.participants, this.USER_ID);
  }
}
