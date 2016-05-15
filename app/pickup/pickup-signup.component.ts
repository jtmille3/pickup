import { Component, Input , OnInit } from '@angular/core';

import { Sport } from '../sport';

@Component({
  selector: 'pickup-form',
  templateUrl: 'app/pickup/pickup-signup.component.html',
  styleUrls: ['app/pickup/pickup-signup.component.css']
})
export class PickupSignupComponent implements OnInit {

  @Input() sport: Sport;

  constructor() {}

  ngOnInit() {
    console.log(this.sport);
  }

  submit() {
    console.log('Submit');
  }
}
