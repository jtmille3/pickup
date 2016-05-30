import { Component, Input, OnInit, Inject } from '@angular/core';

import { Notification, NotificationType } from './notification';

@Component({
  selector: 'notifications',
  templateUrl: 'app/notification/notifications.component.html',
  styleUrls: ['app/notification/notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications:Notification[];

  public notificationType = NotificationType;

  constructor(
  ) {}

  ngOnInit() {
    var suppression:number[] = this.getSuppression();
    this.notifications = _.filter(this.notifications, notification => !_.contains(suppression, notification.notificationId));
  };

  onClose(notification:Notification) {
    var suppression:number[] = this.getSuppression();
    suppression.push(notification.notificationId);
    this.setSuppression(suppression);
  }

  private getSuppression():number[] {
    return JSON.parse(localStorage.getItem('notification-suppression') || '[]');
  }

  private setSuppression(suppression:number[]) {
    localStorage.setItem('notification-suppression', JSON.stringify(_.uniq(suppression)));
  }
}
