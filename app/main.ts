import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { provide } from '@angular/core';

import { Participant } from './participant';

var me = new Participant();
me.participantId = 'jemill';
me.name = 'Jeff Miller';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  // TODO: replace with logged in user
  provide('USER_ID', { useValue: me })
]);
