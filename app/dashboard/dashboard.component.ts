import { Component, OnInit } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { SportService } from '../sport.service';
import { Sport } from '../sport';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css'],
  providers: [
    SportService
  ],
  directives: [
    ROUTER_DIRECTIVES
  ]
})
export class DashboardComponent implements OnInit {

  sports:Sport[] = [];

  constructor(private sportService:SportService) {}

  ngOnInit() {
    // Load sports/activities
    this.sportService.getSports().subscribe(sports => {
      this.sports = sports;
    });
  }
}
