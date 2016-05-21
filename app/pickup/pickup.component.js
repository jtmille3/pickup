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
var pickup_events_component_1 = require('./pickup-events.component');
var pickup_comments_component_1 = require('./pickup-comments.component');
var event_dialog_component_1 = require('../event/event-dialog.component');
var activity_1 = require('../activity/activity');
var activity_service_1 = require('../activity/activity.service');
var bootstrap_datetimepicker_component_1 = require('../components/bootstrap-datetimepicker.component');
var PickupComponent = (function () {
    function PickupComponent(activityService, router, routeParams) {
        this.activityService = activityService;
        this.router = router;
        this.routeParams = routeParams;
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var name = this.routeParams.getParam('name');
        this.activityService.getActivity(name).subscribe(function (activity) { return _this.activity = activity; });
    };
    PickupComponent.prototype.onDeleteActivity = function (activity) {
        var _this = this;
        this.activityService.deleteActivity(activity).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    PickupComponent.prototype.onAddEvent = function (activity) {
        event_dialog_component_1.EventDialogComponent.show(activity);
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
                router_1.ROUTER_DIRECTIVES,
                pickup_events_component_1.PickupEventsComponent,
                pickup_comments_component_1.PickupCommentsComponent,
                bootstrap_datetimepicker_component_1.BootstrapDateTimePickerComponent,
                event_dialog_component_1.EventDialogComponent
            ]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService, router_1.Router, router_1.RouteSegment])
    ], PickupComponent);
    return PickupComponent;
}());
exports.PickupComponent = PickupComponent;
//# sourceMappingURL=pickup.component.js.map