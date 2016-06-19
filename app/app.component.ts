import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PickupComponent } from './pickup/pickup.component';

import { EditService } from './edit.service';

import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, WeatherComponent]
})
@Routes([
  { path: '/', component: DashboardComponent },
  { path: '/pickup/:name/:date', component: PickupComponent }
])
export class AppComponent {

  constructor(private editService:EditService) {}

  onToggleEdit() {
    this.editService.toggle();
    return false;
  }
}
