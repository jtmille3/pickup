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
var sport_1 = require('../sport');
var PickupSignupComponent = (function () {
    function PickupSignupComponent() {
    }
    PickupSignupComponent.prototype.ngOnInit = function () {
        console.log(this.sport);
    };
    PickupSignupComponent.prototype.submit = function () {
        console.log('Submit');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', sport_1.Sport)
    ], PickupSignupComponent.prototype, "sport", void 0);
    PickupSignupComponent = __decorate([
        core_1.Component({
            selector: 'pickup-form',
            templateUrl: 'app/pickup/pickup-signup.component.html',
            styleUrls: ['app/pickup/pickup-signup.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PickupSignupComponent);
    return PickupSignupComponent;
}());
exports.PickupSignupComponent = PickupSignupComponent;
//# sourceMappingURL=pickup-signup.component.js.map