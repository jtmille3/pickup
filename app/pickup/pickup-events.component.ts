import { Component, Input, Output, OnInit, Inject } from '@angular/core';

import { Activity } from '../activity/activity';
import { Event } from '../event/event';
import { Participant } from '../participant/participant';

import { PickupParticipantsComponent } from './pickup-participants.component';

import { EditService } from '../edit.service';

declare var $;

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
    var guest:Participant = {
      participantId: this.USER_ID.participantId,
      name: 'Guest',
      guest: true
    };

    event.participants.push(guest);

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

  onToggle(e) {
    var $toggle = $(e.currentTarget);
    //getting the next element
    var $content = $toggle.parent().parent().next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(200, () => {
      if($content.is(':visible')) {
        $toggle.removeClass('glyphicon glyphicon-chevron-up').addClass('glyphicon glyphicon-chevron-down');
      } else {
        $toggle.removeClass('glyphicon glyphicon-chevron-down').addClass('glyphicon glyphicon-chevron-up');
      }
    });
  };
}
