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
var participants_component_1 = require('../participant/participants.component');
var edit_service_1 = require('../edit.service');
var EventsComponent = (function () {
    function EventsComponent(USER_ID, editService) {
        this.USER_ID = USER_ID;
        this.editService = editService;
        this.eventsChange = new core_1.EventEmitter();
    }
    EventsComponent.prototype.ngOnInit = function () { };
    EventsComponent.prototype.onAddMe = function (event) {
        if (_.contains(event.participants, this.USER_ID)) {
            return;
        }
        event.participants.push(this.USER_ID);
        return false;
    };
    EventsComponent.prototype.onAddGuest = function (event) {
        var guest = {
            participantId: this.USER_ID.participantId,
            name: 'Guest',
            guest: true
        };
        event.participants.push(guest);
        return false;
    };
    EventsComponent.prototype.onRemoveMe = function (event) {
        event.participants = _.without(event.participants, this.USER_ID);
        return false;
    };
    EventsComponent.prototype.onRemoveEvent = function (event) {
        this.events = _.without(this.events, event);
        this.eventsChange.emit(this.events);
        return false;
    };
    EventsComponent.prototype.onToggle = function (e) {
        var $toggle = $(e.currentTarget);
        //getting the next element
        var $content = $toggle.parent().parent().next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(200, function () {
            if ($content.is(':visible')) {
                $toggle.removeClass('glyphicon glyphicon-chevron-up').addClass('glyphicon glyphicon-chevron-down');
            }
            else {
                $toggle.removeClass('glyphicon glyphicon-chevron-down').addClass('glyphicon glyphicon-chevron-up');
            }
        });
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], EventsComponent.prototype, "events", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], EventsComponent.prototype, "eventsChange", void 0);
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            templateUrl: 'app/event/events.component.html',
            styleUrls: ['app/event/events.component.css'],
            directives: [
                participants_component_1.ParticipantsComponent
            ]
        }),
        __param(0, core_1.Inject('USER_ID')), 
        __metadata('design:paramtypes', [participant_1.Participant, edit_service_1.EditService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map