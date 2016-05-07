"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
/**
$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
var SportService = (function () {
    function SportService() {
    }
    SportService.prototype.getSports = function () {
        return Promise.resolve(SPORTS);
    };
    SportService.prototype.getSport = function (id) {
    };
    SportService.prototype.addSport = function (sport) {
    };
    SportService.prototype.updateSport = function (sport) {
    };
    SportService.prototype.deleteSport = function (id) {
    };
    SportService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SportService);
    return SportService;
}());
exports.SportService = SportService;
// mock sports for now
var SPORTS = [{
        id: 1,
        name: 'Soccer'
    }, {
        id: 2,
        name: 'Basketball'
    }];
//# sourceMappingURL=sport.service.js.map