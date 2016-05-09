import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {DashboardComponent } from './dashboard.component';
import {PickupComponent } from './pickup.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/pickup/:name',
    name: 'Pickup',
    component: PickupComponent
  }
])
export class AppComponent {
  year:number;

  constructor() {
    this.year = new Date().getFullYear();
  }
}
