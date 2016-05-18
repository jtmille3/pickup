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
var comment_1 = require('../comment');
var PickupCommentsComponent = (function () {
    function PickupCommentsComponent() {
    }
    PickupCommentsComponent.prototype.ngOnInit = function () {
        console.log(this.comments);
    };
    PickupCommentsComponent.prototype.onSubmit = function () {
        if (this.comment) {
            var comment = new comment_1.Comment();
            comment.text = this.comment;
            console.log(this.comment);
            this.comments.push(comment);
            this.comment = '';
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], PickupCommentsComponent.prototype, "comments", void 0);
    PickupCommentsComponent = __decorate([
        core_1.Component({
            selector: 'pickup-comments',
            templateUrl: 'app/pickup/pickup-comments.component.html',
            styleUrls: ['app/pickup/pickup-comments.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PickupCommentsComponent);
    return PickupCommentsComponent;
}());
exports.PickupCommentsComponent = PickupCommentsComponent;
//# sourceMappingURL=pickup-comments.component.js.map