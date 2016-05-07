import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit() {
    // Load sports/activities
    console.log('Loaded Dashboard');
  }
}
