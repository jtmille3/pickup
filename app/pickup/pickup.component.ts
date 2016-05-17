import { Component, Output, OnInit } from '@angular/core';

import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PickupSignupComponent } from './pickup-signup.component';
import { PickupParticipantsComponent } from './pickup-participants.component';
import { PickupCommentsComponent } from './pickup-comments.component';

import { Sport } from '../sport';
import { SportService } from '../sport.service';

@Component({
  selector: 'pickup',
  templateUrl: 'app/pickup/pickup.component.html',
  styleUrls: ['app/pickup/pickup.component.css'],
  providers: [
    SportService
  ],
  directives: [
    ROUTER_DIRECTIVES,
    PickupSignupComponent,
    PickupParticipantsComponent,
    PickupCommentsComponent
  ]
})
export class PickupComponent implements OnInit {

  @Output() sport:Sport;

  constructor(
    private sportService:SportService,
    private routeParams: RouteParams) {}

  ngOnInit() {
    var name:string = this.routeParams.get('name');
    this.sportService.getSport(name).subscribe(sport => this.sport = sport);
  }
}
