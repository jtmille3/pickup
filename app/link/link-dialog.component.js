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
var LinkDialogComponent = (function () {
    function LinkDialogComponent() {
        this.text = '';
        this.href = '';
    }
    LinkDialogComponent.prototype.ngOnInit = function () { };
    LinkDialogComponent.prototype.onAddLink = function () {
        if (!this.text || !this.href) {
            return;
        }
        var link = {
            linkId: Math.random() * 10000000,
            text: this.text,
            href: this.href
        };
        LinkDialogComponent.activity.links.push(link);
        $('#link-modal').modal('hide');
        this.text = '';
        this.href = '';
    };
    LinkDialogComponent.show = function (activity) {
        LinkDialogComponent.activity = activity;
        $('#link-modal').modal('show');
        $('#link-modal .text').focus();
    };
    LinkDialogComponent = __decorate([
        core_1.Component({
            selector: 'link-dialog',
            templateUrl: 'app/link/link-dialog.component.html',
            styleUrls: ['app/link/link-dialog.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], LinkDialogComponent);
    return LinkDialogComponent;
}());
exports.LinkDialogComponent = LinkDialogComponent;
//# sourceMappingURL=link-dialog.component.js.map