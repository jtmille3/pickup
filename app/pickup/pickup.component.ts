import { Component, OnInit } from '@angular/core';

import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PickupFormComponent } from './pickup-form.component';

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
    PickupFormComponent
  ]
})
export class PickupComponent implements OnInit {

  sport:Sport;

  constructor(
    private sportService:SportService,
    private routeParams: RouteParams) {}

  ngOnInit() {
    var name:string = this.routeParams.get('name');
    this.sportService.getSport(name).subscribe(sport => this.sport = sport);
  }
}
