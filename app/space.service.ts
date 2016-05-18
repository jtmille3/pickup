import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

import { Activity } from './activity';
import { Space } from './space';

declare var _;

@Injectable()
export class SpaceService {

  public static get BASE_URL():string { return 'services/location.php' };

  constructor(private http: Http) {}

  getSpaces(activity:Activity) {
    return Observable.create(observer => {
      observer.next(SPACES);
      observer.complete();
    });
  }

  getSpace(name:string) {
    var space:Space = _.find(SPACES, _space => _space.name === name);
    return Observable.create(observer => {
      observer.next(space);
      observer.complete();
    });
  }

  addSpace(space:Space) {
    SPACES.push(space);
    return Observable.create(observer => {
      observer.next(space);
      observer.complete();
    });
  }

  updateSpace(space:Space) {
    var index:number = _.findIndex(SPACES, _space => _space.id === space.spaceId);
    SPACES[index] = space;
    return Observable.create(observer => {
      observer.next(space);
      observer.complete();
    });
  }

  deleteSpace(name:string) {
    SPACES = _.filter(SPACES, _space => _space.name !== name);
    return Observable.create(observer => {
      observer.complete();
    });
  }
}

// mock spaces for now
var SPACES = [
  {
    spaceId: 1,
    name: 'Field 1'
  },
  {
    spaceId: 2,
    name: 'Field 2'
  }
];
