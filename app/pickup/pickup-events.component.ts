import { Component, Input, Output, OnInit, Inject } from '@angular/core';

import { Event } from '../event/event';
import { Participant } from '../participant/participant';

import { PickupParticipantsComponent } from './pickup-participants.component';

@Component({
  selector: 'pickup-events',
  templateUrl: 'app/pickup/pickup-events.component.html',
  styleUrls: ['app/pickup/pickup-events.component.css'],
  directives: [
    PickupParticipantsComponent
  ]
})
export class PickupEventsComponent implements OnInit {

  @Input() events: Event[];

  constructor(@Inject('USER_ID') private USER_ID:Participant) {}

  ngOnInit() {}

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
