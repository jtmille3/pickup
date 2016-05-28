import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { BootstrapTimePickerComponent } from '../components/bootstrap-timepicker.component';

import { Activity } from '../activity/activity';
import { Event } from './event';

declare var $;
declare var moment;

@Component({
  selector: 'event-dialog',
  templateUrl: 'app/event/event-dialog.component.html',
  styleUrls: ['app/event/event-dialog.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    BootstrapTimePickerComponent
  ]
})
export class EventDialogComponent implements OnInit {

  space:string;
  time:string;

  static activity:Activity;

  constructor() {}

  ngOnInit() {
    $('#event-modal').on('show.bs.modal', () => {
      this.time = moment().format('h:mm A');
      this.space = '';
    });
  }

  onAddEvent() {
    if(!this.space || !this.time) {
      return;
    }

    var event:Event = {
      time: this.time,
      space: this.space,
      participants: []
    };

    EventDialogComponent.activity.events.push(event);

    $('#event-modal').modal('hide');
  }

  public static show(activity:Activity):void {
    EventDialogComponent.activity = activity;
    $('#event-modal').modal('show');
    $('#event-modal .space').focus();
  }
}
