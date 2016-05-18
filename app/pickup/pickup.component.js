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
var pickup_events_component_1 = require('./pickup-events.component');
var pickup_comments_component_1 = require('./pickup-comments.component');
var activity_1 = require('../activity');
var activity_service_1 = require('../activity.service');
var bootstrap_datetimepicker_component_1 = require('../components/bootstrap-datetimepicker.component');
var PickupComponent = (function () {
    function PickupComponent(activityService, routeParams) {
        this.activityService = activityService;
        this.routeParams = routeParams;
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.routeParams.get('name');
        this.activityService.getActivity(name).subscribe(function (activity) { return _this.activity = activity; });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', activity_1.Activity)
    ], PickupComponent.prototype, "activity", void 0);
    PickupComponent = __decorate([
        core_1.Component({
            selector: 'pickup',
            templateUrl: 'app/pickup/pickup.component.html',
            styleUrls: ['app/pickup/pickup.component.css'],
            providers: [
                activity_service_1.ActivityService
            ],
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES,
                pickup_events_component_1.PickupEventsComponent,
                pickup_comments_component_1.PickupCommentsComponent,
                bootstrap_datetimepicker_component_1.BootstrapDateTimePickerComponent
            ]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService, router_deprecated_1.RouteParams])
    ], PickupComponent);
    return PickupComponent;
}());
exports.PickupComponent = PickupComponent;
//# sourceMappingURL=pickup.component.js.map