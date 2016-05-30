import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { Activity } from '../activity/activity';
import { Notification, NotificationType } from './notification';

@Component({
  selector: 'notification-dialog',
  templateUrl: 'app/notification/notification-dialog.component.html',
  styleUrls: ['app/notification/notification-dialog.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NotificationDialogComponent implements OnInit {

  text:string = '';
  type:NotificationType = NotificationType.Info;

  notificationType = NotificationType;
  keys:any;

  static activity:Activity;

  constructor() {
    this.keys = Object.keys(this.notificationType).filter(value => !isNaN(+value));
  }

  ngOnInit() {}

  onAddNotification() {
    if(!this.text) {
      return;
    }

    var notification:Notification = {
      notificationId: Math.random() * 10000000,
      text: this.text,
      type: this.type
    };

    NotificationDialogComponent.activity.notifications.push(notification);

    $('#notification-modal').modal('hide');

    this.text = '';
    this.type = NotificationType.Info;
  }

  public static show(activity:Activity):void {
    NotificationDialogComponent.activity = activity;
    $('#notification-modal').modal('show');
    $('#notification-modal .text').focus();
  }
}
