import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { Activity } from './activity';

declare var _;

/**
http://sww.sas.com/~jemill/pickup/services/sport.php/sports

$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
@Injectable()
export class ActivityService {

  public static get BASE_URL():string { return 'services/sport.php' };

  constructor(private http: Http) {}

  getActivities() {
    return Observable.create(observer => {
      observer.next(ACTIVITIES);
      observer.complete();
    });
  }

  getActivity(name:string) {
    var activity:Activity = _.find(ACTIVITIES, _activity => _activity.name === name);
    return Observable.create(observer => {
      observer.next(activity);
      observer.complete();
    });
  }

  addActivity(activity:Activity) {
    ACTIVITIES.push(activity);
    return Observable.create(observer => {
      observer.next(activity);
      observer.complete();
    });
  }

  updateActivity(activity:Activity) {
    var index:number = _.findIndex(ACTIVITIES, _activity => _activity.id === activity.id);
    ACTIVITIES[index] = activity;
    return Observable.create(observer => {
      observer.next(activity);
      observer.complete();
    });
  }

  deleteActivity(name:string) {
    ACTIVITIES = _.filter(ACTIVITIES, _activity => _activity.name !== name);
    return Observable.create(observer => {
      observer.complete();
    });
  }
}

// mock sports for now
var ACTIVITIES = [{
  activityId: 1,
  name: 'Soccer',
  signups: 23,
  comments: [
    {
      commentId: 0,
      participantId: 'jemill',
      text: 'First post',
      timestamp: new Date()
    },
    {
      commentId: 0,
      participantId: 'joblow',
      text: 'Do not delete me',
      timestamp: new Date()
    }
  ],
  events: [{
    time: { name:'11:30 AM' },
    space: { name: 'Field 1' },
    participants: [{
        participantId: 'joblow',
        name: 'Joe Blow'
      }]
  },{
    time: { name:'12:30 PM' },
    space: { name: 'Field 1' },
    participants: []
  },{
    time: { name:'11:30 AM' },
    space: { name: 'Field 2' },
    participants: []
  },{
    time: { name:'12:30 PM' },
    space: { name: 'Field 2' },
    participants: []
  }]
}, {
  id: 2,
  name: 'Basketball',
  signups: 12,
  comments: [],
  events: []
}, {
  id: 3,
  name: 'Futsal',
  signups: 7,
  comments: [],
  events: []
}];
