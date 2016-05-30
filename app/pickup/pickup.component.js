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
var notifications_component_1 = require('../notification/notifications.component');
var events_component_1 = require('../event/events.component');
var comments_component_1 = require('../comment/comments.component');
var notification_dialog_component_1 = require('../notification/notification-dialog.component');
var event_dialog_component_1 = require('../event/event-dialog.component');
var links_component_1 = require('../link/links.component');
var activity_1 = require('../activity/activity');
var activity_service_1 = require('../activity/activity.service');
var edit_service_1 = require('../edit.service');
var bootstrap_datepicker_component_1 = require('../components/bootstrap-datepicker.component');
var PickupComponent = (function () {
    function PickupComponent(activityService, editService, router, routeParams) {
        this.activityService = activityService;
        this.editService = editService;
        this.router = router;
        this.routeParams = routeParams;
        this.date = '';
        this.name = '';
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = this.routeParams.getParam('name');
        this.date = this.routeParams.getParam('date');
        this.activityService.getActivity(this.name).subscribe(function (activity) { return _this.activity = activity; });
    };
    PickupComponent.prototype.onDeleteActivity = function (activity) {
        var _this = this;
        this.activityService.deleteActivity(activity).subscribe(function () {
            _this.router.navigate(['/']);
        });
        return false;
    };
    PickupComponent.prototype.onAddEvent = function (activity) {
        event_dialog_component_1.EventDialogComponent.show(activity);
    };
    PickupComponent.prototype.onAddNotification = function (activity) {
        notification_dialog_component_1.NotificationDialogComponent.show(activity);
    };
    PickupComponent.prototype.onDateChange = function (date) {
        this.router.navigate(['/pickup', this.name, date]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', activity_1.Activity)
    ], PickupComponent.prototype, "activity", void 0);
    PickupComponent = __decorate([
        core_1.Component({
            selector: 'pickup-day',
            templateUrl: 'app/pickup/pickup.component.html',
            styleUrls: ['app/pickup/pickup.component.css'],
            providers: [
                activity_service_1.ActivityService
            ],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                events_component_1.EventsComponent,
                comments_component_1.CommentsComponent,
                bootstrap_datepicker_component_1.BootstrapDatePickerComponent,
                event_dialog_component_1.EventDialogComponent,
                notification_dialog_component_1.NotificationDialogComponent,
                notifications_component_1.NotificationsComponent,
                links_component_1.LinksComponent
            ]
        }), 
        __metadata('design:paramtypes', [activity_service_1.ActivityService, edit_service_1.EditService, router_1.Router, router_1.RouteSegment])
    ], PickupComponent);
    return PickupComponent;
}());
exports.PickupComponent = PickupComponent;
//# sourceMappingURL=pickup.component.js.map