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
        this.change = new core_1.EventEmitter(); // an event emitter
    }
    BootstrapTimePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $element = $(this.element.nativeElement);
        $element.datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'h:mm A'
        });
        $element.data('DateTimePicker').date(moment(this.time).format('h:mm A'));
        $element.on('dp.change', function (e) {
            _this.time = e.date.format('h:mm A');
            _this.timeChange.emit(_this.time);
            _this.change.emit(_this.time);
        });
    };
    BootstrapTimePickerComponent.prototype.ngOnChanges = function () {
        var $element = $(this.element.nativeElement);
        if ($element.data('DateTimePicker')) {
            if (!this.time) {
                this.time = moment().format('h:mm A');
                $element.data('DateTimePicker').date(this.time);
            }
            else {
                $element.data('DateTimePicker').date(this.time);
            }
        }
        this.timeChange.emit(this.time);
        this.change.emit(this.time);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BootstrapTimePickerComponent.prototype, "time", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapTimePickerComponent.prototype, "timeChange", void 0);
    __decorate([
        // an event emitter
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapTimePickerComponent.prototype, "change", void 0);
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