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

  onRemoveMe(event:Event) {
    event.participants = _.without(event.participants, this.USER_ID);

    return false;
  }

  onRemoveEvent(event:Event) {
    this.activity.events = _.without(this.activity.events, event);

    return false;
  }
}
