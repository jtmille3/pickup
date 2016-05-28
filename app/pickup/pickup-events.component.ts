import { Component, Input, Output, OnInit, Inject } from '@angular/core';

import { Activity } from '../activity/activity';
import { Event } from '../event/event';
import { Participant } from '../participant/participant';

import { PickupParticipantsComponent } from './pickup-participants.component';

import { EditService } from '../edit.service';

@Component({
  selector: 'pickup-events',
  templateUrl: 'app/pickup/pickup-events.component.html',
  styleUrls: ['app/pickup/pickup-events.component.css'],
  directives: [
    PickupParticipantsComponent
  ]
})
export class PickupEventsComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    @Inject('USER_ID') private USER_ID:Participant,
    private editService:EditService
  ) {}

  ngOnInit() {}

  onAddMe(event:Event) {
    if(_.contains(event.participants, this.USER_ID)) {
      return;
    }

    event.participants.push(this.USER_ID);

    return false;
  }

  onAddGuest(event:Event) {
    if(!_.contains(event.participants, this.USER_ID)) {
      return;
    }

    this.USER_ID.guests++;

    var guest:Participant = {
      participantId: this.USER_ID.participantId,
      name: 'Guest',
      guests: 0
    };

    event.participants.push(guest);

    return false;
  }

  onRemoveMe(event:Event) {
    this.USER_ID.guests = 0;
    event.participants = _.filter(event.participants, participant => this.USER_ID.participantId !== participant.participantId);

    return false;
  }

  onRemoveEvent(event:Event) {
    this.activity.events = _.without(this.activity.events, event);

    return false;
  }
}
