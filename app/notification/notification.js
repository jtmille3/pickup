"use strict";
(function (NotificationType) {
    NotificationType[NotificationType["Info"] = 0] = "Info";
    NotificationType[NotificationType["Success"] = 1] = "Success";
    NotificationType[NotificationType["Danger"] = 2] = "Danger";
    NotificationType[NotificationType["Warning"] = 3] = "Warning";
})(exports.NotificationType || (exports.NotificationType = {}));
var NotificationType = exports.NotificationType;
var Notification = (function () {
    function Notification() {
    }
    return Notification;
}());
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map