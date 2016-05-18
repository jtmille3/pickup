import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class DashboardComponent implements OnInit {

  activities:Activity[] = [];

  constructor(private activityService:ActivityService) {}

  ngOnInit() {
    // Load sports/activities
    this.activityService.getActivities().subscribe(activities => {
      this.activities = activities;
    });
  }
}
