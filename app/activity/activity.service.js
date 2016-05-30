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
var notification_1 = require('../notification/notification');
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
        var index = _.findIndex(ACTIVITIES, function (_activity) { return _activity.activityId === activity.activityId; });
        ACTIVITIES[index] = activity;
        return Observable_1.Observable.create(function (observer) {
            observer.next(activity);
            observer.complete();
        });
    };
    ActivityService.prototype.deleteActivity = function (activity) {
        ACTIVITIES = _.filter(ACTIVITIES, function (_activity) { return _activity.name !== activity.name; });
        return Observable_1.Observable.create(function (observer) {
            observer.next();
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
        signups: 23,
        links: [
            {
                linkId: 1,
                text: 'Mailing List',
                href: 'http://sas.com/mailing/list'
            },
            {
                linkId: 2,
                text: 'Competitive',
                href: 'http://soccer/comp'
            }
        ],
        notifications: [
            {
                notificationId: 1,
                text: 'This is a test',
                type: notification_1.NotificationType.Info
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
        ],
        events: [{
                time: '11:30 AM',
                space: 'Field 1',
                participants: [{
                        participantId: 'joblow',
                        name: 'Joe Blow',
                        guest: false
                    }]
            }, {
                time: '12:30 PM',
                space: 'Field 1',
                participants: []
            }, {
                time: '11:30 AM',
                space: 'Field 2',
                participants: []
            }, {
                time: '12:30 PM',
                space: 'Field 2',
                participants: []
            }]
    }, {
        activityId: 2,
        name: 'Basketball',
        signups: 12,
        comments: [],
        events: [],
        notifications: [],
        links: []
    }, {
        activityId: 3,
        name: 'Futsal',
        signups: 7,
        comments: [],
        events: [],
        notifications: [],
        links: []
    }];
//# sourceMappingURL=activity.service.js.map