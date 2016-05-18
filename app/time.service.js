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
var TimeService = (function () {
    function TimeService(http) {
        this.http = http;
    }
    Object.defineProperty(TimeService, "BASE_URL", {
        get: function () { return 'services/location.php'; },
        enumerable: true,
        configurable: true
    });
    ;
    TimeService.prototype.getTimes = function (activity) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(TIMES);
            observer.complete();
        });
    };
    TimeService.prototype.getTime = function (name) {
        var time = _.find(TIMES, function (_time) { return _time.name === name; });
        return Observable_1.Observable.create(function (observer) {
            observer.next(time);
            observer.complete();
        });
    };
    TimeService.prototype.addTime = function (time) {
        TIMES.push(time);
        return Observable_1.Observable.create(function (observer) {
            observer.next(time);
            observer.complete();
        });
    };
    TimeService.prototype.updateTime = function (time) {
        var index = _.findIndex(TIMES, function (_time) { return _time.id === time.timeId; });
        TIMES[index] = time;
        return Observable_1.Observable.create(function (observer) {
            observer.next(time);
            observer.complete();
        });
    };
    TimeService.prototype.deleteTime = function (name) {
        TIMES = _.filter(TIMES, function (_time) { return _time.name !== name; });
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    TimeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
// mock times for now
var TIMES = [
    {
        timeId: 1,
        name: 'Field 1'
    },
    {
        timeId: 2,
        name: 'Field 2'
    }
];
//# sourceMappingURL=time.service.js.map