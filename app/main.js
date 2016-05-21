"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var me = {
    participantId: 'jemill',
    name: 'Jeff Miller'
};
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    router_1.ROUTER_PROVIDERS,
    // TODO: replace with logged in user
    core_1.provide('USER_ID', { useValue: me })
]);
//# sourceMappingURL=main.js.map