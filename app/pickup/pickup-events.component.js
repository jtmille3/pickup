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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var participant_1 = require('../participant/participant');
var pickup_participants_component_1 = require('./pickup-participants.component');
var PickupEventsComponent = (function () {
    function PickupEventsComponent(USER_ID) {
        this.USER_ID = USER_ID;
    }
    PickupEventsComponent.prototype.ngOnInit = function () { };
    PickupEventsComponent.prototype.onAddMe = function (event) {
        if (_.contains(event.participants, this.USER_ID)) {
            return;
        }
        event.participants.push(this.USER_ID);
    };
    PickupEventsComponent.prototype.onRemoveMe = function (event) {
        event.participants = _.without(event.participants, this.USER_ID);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PickupEventsComponent.prototype, "events", void 0);
    PickupEventsComponent = __decorate([
        core_1.Component({
            selector: 'pickup-events',
            templateUrl: 'app/pickup/pickup-events.component.html',
            styleUrls: ['app/pickup/pickup-events.component.css'],
            directives: [
                pickup_participants_component_1.PickupParticipantsComponent
            ]
        }),
        __param(0, core_1.Inject('USER_ID')), 
        __metadata('design:paramtypes', [participant_1.Participant])
    ], PickupEventsComponent);
    return PickupEventsComponent;
}());
exports.PickupEventsComponent = PickupEventsComponent;
//# sourceMappingURL=pickup-events.component.js.map