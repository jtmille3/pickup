import { Component, Input , OnInit } from '@angular/core';

import { Activity } from '../activity';
import { Participant } from '../participant';
import { Time } from '../time';
import { Space } from '../space';

import { TimeService } from '../time.service';
import { SpaceService } from '../space.service';

@Component({
  selector: 'pickup-signup',
  templateUrl: 'app/pickup/pickup-signup.component.html',
  styleUrls: ['app/pickup/pickup-signup.component.css'],
  providers: [
    TimeService,
    SpaceService
  ]
})
export class PickupSignupComponent implements OnInit {

  @Input() activity: Activity;

  private time:Time;
  private space:Space;
  private guest:number = 0;

  private times:Time[];
  private spaces:Space[];

  constructor(
    private timeService:TimeService,
    private spaceService:SpaceService
  ) {}

  ngOnInit() {
    console.log(this.activity);

    this.timeService.getTimes(this.activity).subscribe(times => this.times = times);
    this.spaceService.getSpaces(this.activity).subscribe(spaces => this.spaces = spaces);
  }

  onSubmit() {
    if(!this.time && !this.space) {
      return;
    }

    var participant = new Participant();
    participant.participantId = 'jemill';
    participant.name = 'Jeff Miller';

    // TODO: do this through a service 
    this.activity.participants.push(participant);

    console.log('Submit');
  }

  onSelectTime(time:Time) {
    console.log(time);
    this.time = time;
  }

  onSelectSpace(space:Space) {
    console.log(space);
    this.space = space;
  }

  onSelectGuest(guest:number) {
    console.log(guest);
    this.guest = guest;
  }
}
