import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';

import { Notification, NotificationType } from './notification';

import { EditService } from '../edit.service';

@Component({
  selector: 'notifications',
  templateUrl: 'app/notification/notifications.component.html',
  styleUrls: ['app/notification/notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications:Notification[];
  @Output() notificationsChange:EventEmitter<Notification[]> = new EventEmitter();

  public notificationType = NotificationType;

  constructor(
    private editService:EditService
  ) {}

  ngOnInit() {
    var suppression:number[] = this.getSuppression();

    var i:number = this.notifications.length;
    while(i--) {
      if(_.contains(suppression, this.notifications[i].notificationId)) {
        this.notifications.splice(i, 1);
      }
    }
  }

  onClose(notification:Notification) {
    var suppression:number[] = this.getSuppression();
    suppression.push(notification.notificationId);
    this.setSuppression(suppression);
  }

  onDelete(notification:Notification) {
    this.notifications = _.without(this.notifications, notification);
    this.notificationsChange.emit(this.notifications);
  }

  private getSuppression():number[] {
    return JSON.parse(localStorage.getItem('notification-suppression') || '[]');
  }

  private setSuppression(suppression:number[]) {
    localStorage.setItem('notification-suppression', JSON.stringify(_.uniq(suppression)));
  }
}
