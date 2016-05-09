import { Component, OnInit } from '@angular/core';

import { RouteParams, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Sport } from './sport';
import { SportService } from './sport.service';

@Component({
  selector: 'pickup',
  templateUrl: 'app/pickup.component.html',
  styleUrls: ['app/pickup.component.css'],
  providers: [
    SportService
  ],
  directives: [
    ROUTER_DIRECTIVES
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
