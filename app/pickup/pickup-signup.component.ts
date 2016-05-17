import { Component, Input , OnInit } from '@angular/core';

import { Sport } from '../sport';

import { BootstrapDateTimePickerComponent } from '../components/bootstrap-datetimepicker.component';

@Component({
  selector: 'pickup-signup',
  templateUrl: 'app/pickup/pickup-signup.component.html',
  styleUrls: ['app/pickup/pickup-signup.component.css'],
  directives: [
    BootstrapDateTimePickerComponent
  ]
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
