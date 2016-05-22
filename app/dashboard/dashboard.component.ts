import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { ActivityDialogComponent } from '../activity/activity-dialog.component';

import { ActivityService } from '../activity/activity.service';
import { Activity } from '../activity/activity';

import { EditService } from '../edit.service';

declare var $;
declare var moment;

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    ActivityDialogComponent
  ]
})
export class DashboardComponent implements OnInit {

  activities:Activity[] = [];

  toggle:boolean = false;

  constructor(
    private activityService:ActivityService,
    private editService:EditService,
    private router:Router
  ) {}

  ngOnInit() {
    // Load sports/activities
    this.activityService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }

  onAddActivity() {
    ActivityDialogComponent.show();
  }

  onSelectActivity(activity:Activity) {
    this.router.navigate(['/pickup', activity.name, moment().format('YYYY-MM-DD')]);
  }
}
