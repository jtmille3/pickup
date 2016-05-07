import { Injectable } from '@angular/core';

import { Sport } from './sport';

/**
$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
@Injectable()
export class SportService {

  getSports() {
    return Promise.resolve(SPORTS);
  }

  getSport(id:number) {
    
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
