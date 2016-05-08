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
    //return this.http.get(SportService.BASE_URL + '/sports');
    return Observable.create(observer => {
      observer.next(SPORTS);
      observer.complete();
    });
  }

  getSport(id:number) {
    var sport:Sport = _.find(SPORTS, sport => sport.id === id);
    return Observable.create(observer => {
      observer.next(sport);
      observer.complete();
    });
  }

  addSport(sport:any) {

  }

  updateSport(sport:Sport) {

  }

  deleteSport(id:number) {

  }
}

// mock sports for now
let SPORTS = [{
  id: 1,
  name: 'Soccer'
}, {
  id: 2,
  name: 'Basketball'
}];
