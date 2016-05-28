import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import { EditService } from './edit.service';

import { provide } from '@angular/core';

import { Participant } from './participant/participant';

var me:Participant = {
  participantId: 'jemill',
  name: 'Jeff Miller',
  guests: 0
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  EditService,
  // TODO: replace with logged in user
  provide('USER_ID', { useValue: me })
]);
