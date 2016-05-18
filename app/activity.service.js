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
/**
http://sww.sas.com/~jemill/pickup/services/sport.php/sports

$app->get('/sports', 'getSports');
$app->get('/sports/:id', 'getSport');
$app->post('/sports', 'addSport');
$app->put('/sports/:id', 'updateSport');
$app->delete('/sports/:id',   'deleteSport');
*/
var ActivityService = (function () {
    function ActivityService(http) {
        this.http = http;
    }
    Object.defineProperty(ActivityService, "BASE_URL", {
        get: function () { return 'services/sport.php'; },
        enumerable: true,
        configurable: true
    });
    ;
    ActivityService.prototype.getActivities = function () {
        return Observable_1.Observable.create(function (observer) {
            observer.next(ACTIVITIES);
            observer.complete();
        });
    };
    ActivityService.prototype.getActivity = function (name) {
        var activity = _.find(ACTIVITIES, function (_activity) { return _activity.name === name; });
        return Observable_1.Observable.create(function (observer) {
            observer.next(activity);
            observer.complete();
        });
    };
    ActivityService.prototype.addActivity = function (activity) {
        ACTIVITIES.push(activity);
        return Observable_1.Observable.create(function (observer) {
            observer.next(activity);
            observer.complete();
        });
    };
    ActivityService.prototype.updateActivity = function (activity) {
        var index = _.findIndex(ACTIVITIES, function (_activity) { return _activity.id === activity.id; });
        ACTIVITIES[index] = activity;
        return Observable_1.Observable.create(function (observer) {
            observer.next(activity);
            observer.complete();
        });
    };
    ActivityService.prototype.deleteActivity = function (name) {
        ACTIVITIES = _.filter(ACTIVITIES, function (_activity) { return _activity.name !== name; });
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    ActivityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ActivityService);
    return ActivityService;
}());
exports.ActivityService = ActivityService;
// mock sports for now
var ACTIVITIES = [{
        activityId: 1,
        name: 'Soccer',
        space: { name: 'Field 1' },
        time: { name: '11:30 AM' },
        guests: '1',
        signups: 23,
        participants: [
            {
                participantId: 'joblow',
                name: 'Joe Blow'
            }
        ],
        comments: [
            {
                commentId: 0,
                participantId: 'jemill',
                text: 'First post',
                timestamp: new Date()
            },
            {
                commentId: 0,
                participantId: 'joblow',
                text: 'Do not delete me',
                timestamp: new Date()
            }
        ]
    }, {
        id: 2,
        name: 'Basketball',
        signups: 12
    }, {
        id: 3,
        name: 'Futsal',
        signups: 7
    }];
//# sourceMappingURL=activity.service.js.map