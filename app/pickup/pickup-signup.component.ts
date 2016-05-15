import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pickup-form',
  templateUrl: 'app/pickup/pickup-signup.component.html',
  styleUrls: ['app/pickup/pickup-signup.component.css'],
  inputs: ['sport']
})
export class PickupSignupComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log('Submit');
  }
}
