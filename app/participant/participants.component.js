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
var ParticipantsComponent = (function () {
    function ParticipantsComponent(USER_ID) {
        this.USER_ID = USER_ID;
        this.participantsChange = new core_1.EventEmitter(); // an event emitter
    }
    ParticipantsComponent.prototype.ngOnInit = function () { };
    ParticipantsComponent.prototype.onRemove = function (participant) {
        if (participant.participantId !== this.USER_ID.participantId) {
            return;
        }
        this.participants = _.without(this.participants, participant);
        this.participantsChange.emit(this.participants);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ParticipantsComponent.prototype, "participants", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ParticipantsComponent.prototype, "participantsChange", void 0);
    ParticipantsComponent = __decorate([
        core_1.Component({
            selector: 'participants',
            templateUrl: 'app/participant/participants.component.html',
            styleUrls: ['app/participant/participants.component.css']
        }),
        __param(0, core_1.Inject('USER_ID')), 
        __metadata('design:paramtypes', [participant_1.Participant])
    ], ParticipantsComponent);
    return ParticipantsComponent;
}());
exports.ParticipantsComponent = ParticipantsComponent;
//# sourceMappingURL=participants.component.js.map