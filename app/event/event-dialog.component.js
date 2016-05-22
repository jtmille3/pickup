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
var bootstrap_timepicker_component_1 = require('../components/bootstrap-timepicker.component');
var EventDialogComponent = (function () {
    function EventDialogComponent() {
    }
    EventDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#event-modal').on('show.bs.modal', function () {
            _this.time = moment().format('HH:mm');
            _this.space = '';
        });
    };
    EventDialogComponent.prototype.onAddEvent = function () {
        if (!this.space || !this.time) {
            return;
        }
        var time = {
            timeId: -1,
            name: this.time
        };
        var space = {
            spaceId: -1,
            name: this.space
        };
        var event = {
            time: time,
            space: space,
            participants: []
        };
        EventDialogComponent.activity.events.push(event);
        $('#event-modal').modal('hide');
    };
    EventDialogComponent.show = function (activity) {
        EventDialogComponent.activity = activity;
        $('#event-modal').modal('show');
        $('#event-modal .space').focus();
    };
    EventDialogComponent = __decorate([
        core_1.Component({
            selector: 'event-dialog',
            templateUrl: 'app/event/event-dialog.component.html',
            styleUrls: ['app/event/event-dialog.component.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                bootstrap_timepicker_component_1.BootstrapTimePickerComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], EventDialogComponent);
    return EventDialogComponent;
}());
exports.EventDialogComponent = EventDialogComponent;
//# sourceMappingURL=event-dialog.component.js.map