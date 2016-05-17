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
var BootstrapDateTimePickerComponent = (function () {
    function BootstrapDateTimePickerComponent(element) {
        this.element = element;
    }
    BootstrapDateTimePickerComponent.prototype.ngOnInit = function () {
        var $element = $(this.element.nativeElement);
        $element.datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'yyyy/MM/dd'
        });
    };
    BootstrapDateTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-datetimepicker',
            templateUrl: 'app/components/bootstrap-datetimepicker.component.html',
            styleUrls: ['app/components/bootstrap-datetimepicker.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BootstrapDateTimePickerComponent);
    return BootstrapDateTimePickerComponent;
}());
exports.BootstrapDateTimePickerComponent = BootstrapDateTimePickerComponent;
//# sourceMappingURL=bootstrap-datetimepicker.component.js.map