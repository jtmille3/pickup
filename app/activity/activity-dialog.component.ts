import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { ActivityService } from './activity.service';
import { Activity } from './activity';

@Component({
  selector: 'activity-dialog',
  templateUrl: 'app/activity/activity-dialog.component.html',
  styleUrls: ['app/activity/activity-dialog.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class ActivityDialogComponent implements OnInit {

  name:string;

  constructor(private activityService:ActivityService) {}

  ngOnInit() {}

  onAddActivity() {
    if(!this.name) {
      return;
    }

    var activity = new Activity();
    activity.name = this.name;

    this.activityService.addActivity(activity);

    $('#activity-modal').modal('hide');

    this.name = '';
  }

  public static show():void {
    $('#activity-modal').modal('show');
    $('#activity-modal .name').focus();
  }
}
