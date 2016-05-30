import { Component, Output, OnInit } from '@angular/core';

import { Router, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';

import { NotificationsComponent } from '../notification/notifications.component';
import { EventsComponent } from '../event/events.component';
import { CommentsComponent } from '../comment/comments.component';
import { NotificationDialogComponent } from '../notification/notification-dialog.component';
import { EventDialogComponent } from '../event/event-dialog.component';

import { Activity } from '../activity/activity';
import { ActivityService } from '../activity/activity.service';

import { EditService } from '../edit.service';

import { BootstrapDatePickerComponent } from '../components/bootstrap-datepicker.component';

@Component({
  selector: 'pickup-day',
  templateUrl: 'app/pickup/pickup.component.html',
  styleUrls: ['app/pickup/pickup.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    EventsComponent,
    CommentsComponent,
    BootstrapDatePickerComponent,
    EventDialogComponent,
    NotificationDialogComponent,
    NotificationsComponent
  ]
})
export class PickupComponent implements OnInit {

  @Output() activity:Activity;

  date:string = '';
  name:string = '';

  constructor(
    private activityService:ActivityService,
    private editService:EditService,
    private router: Router,
    private routeParams: RouteSegment) {}

  ngOnInit() {
    this.name = this.routeParams.getParam('name');
    this.date = this.routeParams.getParam('date');

    this.activityService.getActivity(this.name).subscribe(activity => this.activity = activity);
  }

  onDeleteActivity(activity:Activity) {
    this.activityService.deleteActivity(activity).subscribe(() => {
      this.router.navigate(['/']);
    });

    return false;
  }

  onAddEvent(activity:Activity) {
    EventDialogComponent.show(activity);
  }

  onAddNotification(activity:Activity) {
    NotificationDialogComponent.show(activity);
  }

  onDateChange(date) {
    this.router.navigate(['/pickup', this.name, date]);
  }
}
