import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { Activity } from '../activity/activity';
import { Time } from '../time/time';

declare var _;

@Injectable()
export class TimeService {

  public static get BASE_URL():string { return 'services/location.php' };

  constructor(private http: Http) {}

  getTimes(activity:Activity) {
    return Observable.create(observer => {
      observer.next(TIMES);
      observer.complete();
    });
  }

  getTime(name:string) {
    var time:Time = _.find(TIMES, _time => _time.name === name);
    return Observable.create(observer => {
      observer.next(time);
      observer.complete();
    });
  }

  addTime(time:Time) {
    TIMES.push(time);
    return Observable.create(observer => {
      observer.next(time);
      observer.complete();
    });
  }

  updateTime(time:Time) {
    var index:number = _.findIndex(TIMES, _time => _time.id === time.timeId);
    TIMES[index] = time;
    return Observable.create(observer => {
      observer.next(time);
      observer.complete();
    });
  }

  deleteTime(name:string) {
    TIMES = _.filter(TIMES, _time => _time.name !== name);
    return Observable.create(observer => {
      observer.complete();
    });
  }
}

// mock times for now
var TIMES = [
  {
    timeId: 1,
    name: '11:30 AM'
  },
  {
    timeId: 2,
    name: '12:30 PM'
  }
];
