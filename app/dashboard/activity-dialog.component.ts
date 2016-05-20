import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ActivityService } from '../activity.service';
import { Activity } from '../activity';

declare var $;

@Component({
  selector: 'activity-dialog',
  templateUrl: 'app/dashboard/activity-dialog.component.html',
  styleUrls: ['app/dashboard/activity-dialog.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class ActivityDialogComponent implements OnInit {

  @Input() toggle:boolean;

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

    $('#activity-model').modal('toggle');
  }
}
