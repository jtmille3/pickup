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
var edit_service_1 = require('../edit.service');
var LinksComponent = (function () {
    function LinksComponent(editService) {
        this.editService = editService;
        this.linksChange = new core_1.EventEmitter();
    }
    LinksComponent.prototype.onDelete = function (link) {
        this.links = _.without(this.links, link);
        this.linksChange.emit(this.links);
        return false;
    };
    LinksComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LinksComponent.prototype, "links", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], LinksComponent.prototype, "linksChange", void 0);
    LinksComponent = __decorate([
        core_1.Component({
            selector: 'links',
            templateUrl: 'app/link/links.component.html',
            styleUrls: ['app/link/links.component.css']
        }), 
        __metadata('design:paramtypes', [edit_service_1.EditService])
    ], LinksComponent);
    return LinksComponent;
}());
exports.LinksComponent = LinksComponent;
//# sourceMappingURL=links.component.js.map