import { Component, Input , OnInit } from '@angular/core';

import { Activity } from '../activity';

@Component({
  selector: 'pickup-signup',
  templateUrl: 'app/pickup/pickup-signup.component.html',
  styleUrls: ['app/pickup/pickup-signup.component.css']
})
export class PickupSignupComponent implements OnInit {

  @Input() activity: Activity;

  constructor() {}

  ngOnInit() {
    console.log(this.activity);
  }

  submit() {
    console.log('Submit');
  }
}
