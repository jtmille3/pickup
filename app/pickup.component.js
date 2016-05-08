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
var router_deprecated_1 = require('@angular/router-deprecated');
var sport_service_1 = require('./sport.service');
var PickupComponent = (function () {
    function PickupComponent(sportService, routeParams) {
        this.sportService = sportService;
        this.routeParams = routeParams;
    }
    PickupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.sportService.getSport(id).subscribe(function (sport) { return _this.sport = sport; });
    };
    PickupComponent = __decorate([
        core_1.Component({
            selector: 'pickup',
            templateUrl: 'app/pickup.component.html',
            styleUrls: ['app/pickup.component.css'],
            providers: [
                sport_service_1.SportService
            ],
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [sport_service_1.SportService, router_deprecated_1.RouteParams])
    ], PickupComponent);
    return PickupComponent;
}());
exports.PickupComponent = PickupComponent;
//# sourceMappingURL=pickup.component.js.map