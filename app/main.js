"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var participant_1 = require('./participant');
var me = new participant_1.Participant();
me.participantId = 'jemill';
me.name = 'Jeff Miller';
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    // TODO: replace with logged in user
    core_1.provide('USER_ID', { useValue: me })
]);
//# sourceMappingURL=main.js.map