"use strict";
var Activity = (function () {
    function Activity() {
        this.activityId = -1;
        this.name = '';
        this.signups = 0;
        this.comments = [];
        this.notifications = [];
        this.events = [];
    }
    return Activity;
}());
exports.Activity = Activity;
//# sourceMappingURL=activity.js.map