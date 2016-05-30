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
var notification_1 = require('./notification');
var NotificationDialogComponent = (function () {
    function NotificationDialogComponent() {
        this.text = '';
        this.type = notification_1.NotificationType.Info;
        this.notificationType = notification_1.NotificationType;
        this.keys = Object.keys(this.notificationType).filter(function (value) { return !isNaN(+value); });
    }
    NotificationDialogComponent.prototype.ngOnInit = function () { };
    NotificationDialogComponent.prototype.onAddNotification = function () {
        if (!this.text) {
            return;
        }
        var notification = {
            notificationId: Math.random() * 10000000,
            text: this.text,
            type: this.type
        };
        NotificationDialogComponent.activity.notifications.push(notification);
        $('#notification-modal').modal('hide');
        this.text = '';
        this.type = notification_1.NotificationType.Info;
    };
    NotificationDialogComponent.show = function (activity) {
        NotificationDialogComponent.activity = activity;
        $('#notification-modal').modal('show');
        $('#notification-modal .text').focus();
    };
    NotificationDialogComponent = __decorate([
        core_1.Component({
            selector: 'notification-dialog',
            templateUrl: 'app/notification/notification-dialog.component.html',
            styleUrls: ['app/notification/notification-dialog.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationDialogComponent);
    return NotificationDialogComponent;
}());
exports.NotificationDialogComponent = NotificationDialogComponent;
//# sourceMappingURL=notification-dialog.component.js.map