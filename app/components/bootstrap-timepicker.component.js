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
var BootstrapTimePickerComponent = (function () {
    function BootstrapTimePickerComponent(element) {
        this.element = element;
        this.timeChange = new core_1.EventEmitter(); // an event emitter
    }
    BootstrapTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $element = $(this.element.nativeElement);
        $element.datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'HH:mm'
        });
        $element.on('dp.change', function () {
            _this.timeChange.emit($element.data('DateTimePicker').date().format('HH:mm'));
        });
    };
    Object.defineProperty(BootstrapTimePickerComponent.prototype, "time", {
        set: function (time) {
            var $element = $(this.element.nativeElement);
            if ($element.data('DateTimePicker')) {
                if (!time) {
                    $element.data('DateTimePicker').date(new Date());
                }
                else {
                    $element.data('DateTimePicker').date(time);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapTimePickerComponent.prototype, "timeChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], BootstrapTimePickerComponent.prototype, "time", null);
    BootstrapTimePickerComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-timepicker',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BootstrapTimePickerComponent);
    return BootstrapTimePickerComponent;
}());
exports.BootstrapTimePickerComponent = BootstrapTimePickerComponent;
//# sourceMappingURL=bootstrap-timepicker.component.js.map