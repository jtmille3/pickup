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
var activity_1 = require('../activity');
var time_service_1 = require('../time.service');
var space_service_1 = require('../space.service');
var PickupSignupComponent = (function () {
    function PickupSignupComponent(timeService, spaceService) {
        this.timeService = timeService;
        this.spaceService = spaceService;
        this.guest = 0;
    }
    PickupSignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.activity);
        this.timeService.getTimes(this.activity).subscribe(function (times) { return _this.times = times; });
        this.spaceService.getSpaces(this.activity).subscribe(function (spaces) { return _this.spaces = spaces; });
    };
    PickupSignupComponent.prototype.onSubmit = function () {
        console.log('Submit');
    };
    PickupSignupComponent.prototype.onSelectTime = function (time) {
        console.log(time);
        this.time = time;
    };
    PickupSignupComponent.prototype.onSelectSpace = function (space) {
        console.log(space);
        this.space = space;
    };
    PickupSignupComponent.prototype.onSelectGuest = function (guest) {
        console.log(guest);
        this.guest = guest;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', activity_1.Activity)
    ], PickupSignupComponent.prototype, "activity", void 0);
    PickupSignupComponent = __decorate([
        core_1.Component({
            selector: 'pickup-signup',
            templateUrl: 'app/pickup/pickup-signup.component.html',
            styleUrls: ['app/pickup/pickup-signup.component.css'],
            providers: [
                time_service_1.TimeService,
                space_service_1.SpaceService
            ]
        }), 
        __metadata('design:paramtypes', [time_service_1.TimeService, space_service_1.SpaceService])
    ], PickupSignupComponent);
    return PickupSignupComponent;
}());
exports.PickupSignupComponent = PickupSignupComponent;
//# sourceMappingURL=pickup-signup.component.js.map