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
var notification_1 = require('./notification');
var NotificationsComponent = (function () {
    function NotificationsComponent() {
        this.notificationType = notification_1.NotificationType;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        var suppression = this.getSuppression();
        this.notifications = _.filter(this.notifications, function (notification) { return !_.contains(suppression, notification.notificationId); });
    };
    ;
    NotificationsComponent.prototype.onClose = function (notification) {
        var suppression = this.getSuppression();
        suppression.push(notification.notificationId);
        this.setSuppression(suppression);
    };
    NotificationsComponent.prototype.getSuppression = function () {
        return JSON.parse(localStorage.getItem('notification-suppression') || '[]');
    };
    NotificationsComponent.prototype.setSuppression = function (suppression) {
        localStorage.setItem('notification-suppression', JSON.stringify(_.uniq(suppression)));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NotificationsComponent.prototype, "notifications", void 0);
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'notifications',
            templateUrl: 'app/notification/notifications.component.html',
            styleUrls: ['app/notification/notifications.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map