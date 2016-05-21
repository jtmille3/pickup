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
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var SpaceService = (function () {
    function SpaceService(http) {
        this.http = http;
    }
    Object.defineProperty(SpaceService, "BASE_URL", {
        get: function () { return 'services/location.php'; },
        enumerable: true,
        configurable: true
    });
    ;
    SpaceService.prototype.getSpaces = function (activity) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(SPACES);
            observer.complete();
        });
    };
    SpaceService.prototype.getSpace = function (name) {
        var space = _.find(SPACES, function (_space) { return _space.name === name; });
        return Observable_1.Observable.create(function (observer) {
            observer.next(space);
            observer.complete();
        });
    };
    SpaceService.prototype.addSpace = function (space) {
        SPACES.push(space);
        return Observable_1.Observable.create(function (observer) {
            observer.next(space);
            observer.complete();
        });
    };
    SpaceService.prototype.updateSpace = function (space) {
        var index = _.findIndex(SPACES, function (_space) { return _space.id === space.spaceId; });
        SPACES[index] = space;
        return Observable_1.Observable.create(function (observer) {
            observer.next(space);
            observer.complete();
        });
    };
    SpaceService.prototype.deleteSpace = function (name) {
        SPACES = _.filter(SPACES, function (_space) { return _space.name !== name; });
        return Observable_1.Observable.create(function (observer) {
            observer.complete();
        });
    };
    SpaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpaceService);
    return SpaceService;
}());
exports.SpaceService = SpaceService;
// mock spaces for now
var SPACES = [
    {
        spaceId: 1,
        name: 'Field 1'
    },
    {
        spaceId: 2,
        name: 'Field 2'
    }
];
//# sourceMappingURL=space.service.js.map