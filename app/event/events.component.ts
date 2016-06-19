import { Component, EventEmitter, Input, Output, OnInit, Inject } from '@angular/core';

import { Activity } from '../activity/activity';
import { Event } from '../event/event';
import { Participant } from '../participant/participant';

import { ParticipantsComponent } from '../participant/participants.component';

import { EditService } from '../edit.service';

@Component({
  selector: 'events',
  templateUrl: 'app/event/events.component.html',
  styleUrls: ['app/event/events.component.css'],
  directives: [
    ParticipantsComponent
  ]
})
export class EventsComponent implements OnInit {

  @Input() events: Event[];
  @Output() eventsChange: EventEmitter<Event[]> = new EventEmitter<Event[]>();

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
    this.events = _.without(this.events, event);
    this.eventsChange.emit(this.events);
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
