import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { Activity } from '../activity/activity';
import { Event } from './event';
import { Space } from '../space/space';
import { Time } from '../time/time';

declare var $;

@Component({
  selector: 'event-dialog',
  templateUrl: 'app/event/event-dialog.component.html',
  styleUrls: ['app/event/event-dialog.component.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class EventDialogComponent implements OnInit {

  space:string;
  time:string;

  static activity:Activity;

  constructor() {}

  ngOnInit() {}

  onAddEvent() {
    if(!this.space) {
      return;
    }

    var time:Time = {
      timeId: -1,
      name: this.time
    }

    var space:Space = {
      spaceId: -1,
      name: this.space
    }

    var event:Event = {
      time: time,
      space: space,
      participants: []
    };

    EventDialogComponent.activity.events.push(event);

    $('#event-modal').modal('hide');

    this.space = '';
    this.time = '';
  }

  public static show(activity:Activity):void {
    EventDialogComponent.activity = activity;
    $('#event-modal').modal('show');
    $('#event-modal .space').focus();
  }
}
