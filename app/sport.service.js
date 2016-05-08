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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var _ = require('underscore');
/**
http://sww.sas.com/~jemill/pickup/services/sport.php/sports

$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
var SportService = (function () {
    function SportService(http) {
        this.http = http;
    }
    Object.defineProperty(SportService, "BASE_URL", {
        get: function () { return 'services/sport.php'; },
        enumerable: true,
        configurable: true
    });
    ;
    SportService.prototype.getSports = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next(SPORTS);
            observer.complete();
        });
    };
    SportService.prototype.getSport = function (id) {
        var sport = _.find(SPORTS, function (_sport) { return _sport.id === id; });
        return Observable_1.Observable.create(function (observer) {
            observer.next(sport);
            observer.complete();
        });
    };
    SportService.prototype.addSport = function (sport) {
        SPORTS.push(sport);
        return Observable_1.Observable.create(function (observer) {
            observer.next(sport);
            observer.complete();
        });
    };
    SportService.prototype.updateSport = function (sport) {
        var index = _.findIndex(SPORTS, function (_sport) { return _sport.id === sport.id; });
        SPORTS[index] = sport;
        return Observable_1.Observable.create(function (observer) {
            observer.next(sport);
            observer.complete();
        });
    };
    SportService.prototype.deleteSport = function (id) {
        SPORTS = _.filter(SPORTS, function (_sport) { return _sport.id !== id; });
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    SportService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
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