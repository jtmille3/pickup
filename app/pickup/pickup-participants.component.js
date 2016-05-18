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
var participant_1 = require('../participant');
var PickupParticipantsComponent = (function () {
    function PickupParticipantsComponent(USER_ID) {
        this.USER_ID = USER_ID;
    }
    PickupParticipantsComponent.prototype.ngOnInit = function () {
        console.log('Participants', this.participants);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PickupParticipantsComponent.prototype, "participants", void 0);
    PickupParticipantsComponent = __decorate([
        core_1.Component({
            selector: 'pickup-participants',
            templateUrl: 'app/pickup/pickup-participants.component.html',
            styleUrls: ['app/pickup/pickup-participants.component.css']
        }),
        __param(0, core_1.Inject('USER_ID')), 
        __metadata('design:paramtypes', [participant_1.Participant])
    ], PickupParticipantsComponent);
    return PickupParticipantsComponent;
}());
exports.PickupParticipantsComponent = PickupParticipantsComponent;
//# sourceMappingURL=pickup-participants.component.js.map