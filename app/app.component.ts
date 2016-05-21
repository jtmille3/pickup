import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import {DashboardComponent } from './dashboard/dashboard.component';
import {PickupComponent } from './pickup/pickup.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/dashboard', component: DashboardComponent },
  { path: '/pickup/:name', component: PickupComponent }
])
export class AppComponent {
  year:number;

  constructor() {
    this.year = new Date().getFullYear();
  }
}
