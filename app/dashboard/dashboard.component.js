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
var router_deprecated_1 = require('@angular/router-deprecated');
var activity_dialog_component_1 = require('../activity/activity-dialog.component');
var activity_service_1 = require('../activity/activity.service');
var DashboardComponent = (function () {
    function DashboardComponent(activityService) {
        this.activityService = activityService;
        this.activities = [];
        this.toggle = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Load sports/activities
        this.activityService.getActivities().subscribe(function (activities) {
            _this.activities = activities;
        });
    };
    DashboardComponent.prototype.onAddActivity = function () {
        activity_dialog_component_1.ActivityDialogComponent.show();
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            providers: [
                activity_service_1.ActivityService
            ],
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                activity_dialog_component_1.ActivityDialogComponent
            ]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map