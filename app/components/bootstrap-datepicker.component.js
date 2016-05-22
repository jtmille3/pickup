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
var BootstrapDatePickerComponent = (function () {
    function BootstrapDatePickerComponent(element) {
        this.element = element;
        this.dateChange = new core_1.EventEmitter(); // an event emitter
        this.change = new core_1.EventEmitter(); // an event emitter
    }
    BootstrapDatePickerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $element = $(this.element.nativeElement);
        $element.datetimepicker({
            inline: true,
            sideBySide: true,
            format: 'YYYY-MM-DD'
        });
        $element.data('DateTimePicker').date(moment(this.date).format('YYYY-MM-DD'));
        $element.on('dp.change', function (e) {
            _this.date = e.date.format('YYYY-MM-DD');
            _this.dateChange.emit(_this.date);
            _this.change.emit(_this.date);
        });
    };
    BootstrapDatePickerComponent.prototype.ngOnChanges = function () {
        var $element = $(this.element.nativeElement);
        if ($element.data('DateTimePicker')) {
            if (!this.date) {
                this.date = moment().format('YYYY-MM-DD');
                $element.data('DateTimePicker').date(this.date);
            }
            else {
                $element.data('DateTimePicker').date(this.date);
            }
        }
        this.dateChange.emit(this.date);
        this.change.emit(this.date);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BootstrapDatePickerComponent.prototype, "date", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapDatePickerComponent.prototype, "dateChange", void 0);
    __decorate([
        // an event emitter
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], BootstrapDatePickerComponent.prototype, "change", void 0);
    BootstrapDatePickerComponent = __decorate([
        core_1.Component({
            selector: 'bootstrap-datepicker',
            template: ''
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BootstrapDatePickerComponent);
    return BootstrapDatePickerComponent;
}());
exports.BootstrapDatePickerComponent = BootstrapDatePickerComponent;
//# sourceMappingURL=bootstrap-datepicker.component.js.map