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
var router_1 = require('@angular/router');
var activity_service_1 = require('./activity.service');
var activity_1 = require('./activity');
var ActivityDialogComponent = (function () {
    function ActivityDialogComponent(activityService) {
        this.activityService = activityService;
    }
    ActivityDialogComponent.prototype.ngOnInit = function () { };
    ActivityDialogComponent.prototype.onAddActivity = function () {
        if (!this.name) {
            return;
        }
        var activity = new activity_1.Activity();
        activity.name = this.name;
        this.activityService.addActivity(activity);
        $('#activity-modal').modal('hide');
        this.name = '';
    };
    ActivityDialogComponent.show = function () {
        $('#activity-modal').modal('show');
        $('#activity-modal .name').focus();
    };
    ActivityDialogComponent = __decorate([
        core_1.Component({
            selector: 'activity-dialog',
            templateUrl: 'app/activity/activity-dialog.component.html',
            styleUrls: ['app/activity/activity-dialog.component.css'],
            providers: [
                activity_service_1.ActivityService
            ],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService])
    ], ActivityDialogComponent);
    return ActivityDialogComponent;
}());
exports.ActivityDialogComponent = ActivityDialogComponent;
//# sourceMappingURL=activity-dialog.component.js.map