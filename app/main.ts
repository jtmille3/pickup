import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

import {HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { provide } from '@angular/core';

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  // TODO: replace with logged in user
  provide('USER_ID', { useValue: 'jemill' })
]);
