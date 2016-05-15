import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { Sport } from './sport';

import * as _ from 'underscore';

/**
http://sww.sas.com/~jemill/pickup/services/sport.php/sports

$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
@Injectable()
export class SportService {

  public static get BASE_URL():string { return 'services/sport.php' };

  constructor(private http: Http) {}

  getSports() {
    return Observable.create(observer => {
      observer.next(SPORTS);
      observer.complete();
    });
  }

  getSport(name:string) {
    var sport:Sport = _.find(SPORTS, _sport => _sport.name === name);
    return Observable.create(observer => {
      observer.next(sport);
      observer.complete();
    });
  }

  addSport(sport:Sport) {
    SPORTS.push(sport);
    return Observable.create(observer => {
      observer.next(sport);
      observer.complete();
    });
  }

  updateSport(sport:Sport) {
    var index:number = _.findIndex(SPORTS, _sport => _sport.id === sport.id);
    SPORTS[index] = sport;
    return Observable.create(observer => {
      observer.next(sport);
      observer.complete();
    });
  }

  deleteSport(name:string) {
    SPORTS = _.filter(SPORTS, _sport => _sport.name !== name);
    return Observable.create(observer => {
      observer.complete();
    });
  }
}

// mock sports for now
var SPORTS = [{
  id: 1,
  name: 'Soccer',
  signups: 23,
  players: [
    {
      id: 'jemill',
      name: 'Jeff Miller'
    }
  ],
  comments: [
    {
      id: 'jemill',
      text: 'First post'
    }
  ]
}, {
  id: 2,
  name: 'Basketball',
  signups: 12
}, {
  id: 3,
  name: 'Futsal',
  signups: 7
}];
