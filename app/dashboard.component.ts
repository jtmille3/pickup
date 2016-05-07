import { Component, OnInit } from '@angular/core';

import { SportService } from './sport.service';
import { Sport } from './sport';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css'],
  providers: [
    SportService
  ]
})
export class DashboardComponent implements OnInit {

  sports:Sport[] = [];

  constructor(private sportService:SportService) {}

  ngOnInit() {
    // Load sports/activities
    this.sportService.getSports().then(sports => {
      console.log(sports);
      this.sports = sports;
    });
  }
}
