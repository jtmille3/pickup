import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { Activity } from './activity';
import { NotificationType } from '../notification/notification';

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
    var index:number = _.findIndex(ACTIVITIES, _activity => _activity.activityId === activity.activityId);
    ACTIVITIES[index] = activity;
    return Observable.create(observer => {
      observer.next(activity);
      observer.complete();
    });
  }

  deleteActivity(activity:Activity) {
    ACTIVITIES = _.filter(ACTIVITIES, _activity => _activity.name !== activity.name);
    return Observable.create(observer => {
      observer.next();
      observer.complete();
    });
  }
}

// mock sports for now
var ACTIVITIES = [{
  activityId: 1,
  name: 'Soccer',
  signups: 23,
  links: [
    {
      linkId: 1,
      text: 'Test',
      href: 'http://google.com'
    }
  ],
  notifications: [
    {
      notificationId: 1,
      text: 'This is a test',
      type: NotificationType.Info
    }
  ],
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
    time: '11:30 AM',
    space: 'Field 1',
    participants: [{
        participantId: 'joblow',
        name: 'Joe Blow',
        guest: false
      }]
  },{
    time: '12:30 PM',
    space: 'Field 1',
    participants: []
  },{
    time: '11:30 AM',
    space: 'Field 2',
    participants: []
  },{
    time: '12:30 PM',
    space: 'Field 2',
    participants: []
  }]
}, {
  activityId: 2,
  name: 'Basketball',
  signups: 12,
  comments: [],
  events: [],
  notifications: [],
  links: []
}, {
  activityId: 3,
  name: 'Futsal',
  signups: 7,
  comments: [],
  events: [],
  notifications: [],
  links: []
}];
