import { Component, Output, OnInit } from '@angular/core';

import { Router, RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PickupEventsComponent } from './pickup-events.component';
import { PickupCommentsComponent } from './pickup-comments.component';

import { Activity } from '../activity/activity';
import { ActivityService } from '../activity/activity.service';

import { BootstrapDateTimePickerComponent } from '../components/bootstrap-datetimepicker.component';

@Component({
  selector: 'pickup',
  templateUrl: 'app/pickup/pickup.component.html',
  styleUrls: ['app/pickup/pickup.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    PickupEventsComponent,
    PickupCommentsComponent,
    BootstrapDateTimePickerComponent
  ]
})
export class PickupComponent implements OnInit {

  @Output() activity:Activity;

  constructor(
    private activityService:ActivityService,
    private router: Router,
    private routeParams: RouteParams) {}

  ngOnInit() {
    var name:string = this.routeParams.get('name');
    this.activityService.getActivity(name).subscribe(activity => this.activity = activity);
  }

  onDeleteActivity(activity:Activity) {
    this.activityService.deleteActivity(activity);
    this.router.navigate(['Dashboard']);
  }
}
