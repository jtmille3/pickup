import { Component, Output, OnInit } from '@angular/core';

import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PickupSignupComponent } from './pickup-signup.component';
import { PickupParticipantsComponent } from './pickup-participants.component';
import { PickupCommentsComponent } from './pickup-comments.component';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'pickup',
  templateUrl: 'app/pickup/pickup.component.html',
  styleUrls: ['app/pickup/pickup.component.css'],
  providers: [
    ActivityService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    PickupSignupComponent,
    PickupParticipantsComponent,
    PickupCommentsComponent
  ]
})
export class PickupComponent implements OnInit {

  @Output() activity:Activity;

  constructor(
    private activityService:ActivityService,
    private routeParams: RouteParams) {}

  ngOnInit() {
    var name:string = this.routeParams.get('name');
    this.activityService.getActivity(name).subscribe(activity => this.activity = activity);
  }
}
