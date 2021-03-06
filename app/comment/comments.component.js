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
var CommentsComponent = (function () {
    function CommentsComponent(USER_ID) {
        this.USER_ID = USER_ID;
    }
    CommentsComponent.prototype.ngOnInit = function () { };
    CommentsComponent.prototype.onSubmit = function () {
        if (!this.comment) {
            return;
        }
        // move this into a comment service...
        var comment = {
            commentId: Math.random() * 10000000,
            participantId: this.USER_ID.participantId,
            text: this.comment,
            timestamp: new Date()
        };
        this.comments.push(comment);
        this.comment = '';
    };
    CommentsComponent.prototype.onDelete = function (comment) {
        // move this into a comment service...
        this.comments = _.without(this.comments, comment);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CommentsComponent.prototype, "comments", void 0);
    CommentsComponent = __decorate([
        core_1.Component({
            selector: 'comments',
            templateUrl: 'app/comment/comments.component.html',
            styleUrls: ['app/comment/comments.component.css']
        }),
        __param(0, core_1.Inject('USER_ID')), 
        __metadata('design:paramtypes', [Object])
    ], CommentsComponent);
    return CommentsComponent;
}());
exports.CommentsComponent = CommentsComponent;
//# sourceMappingURL=comments.component.js.map