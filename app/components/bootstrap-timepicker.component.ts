import { Component, Input, Output, OnInit, OnChanges, ElementRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'bootstrap-timepicker',
  template: ''
})
export class BootstrapTimePickerComponent implements OnInit, OnChanges {

  @Input() time:string;
  @Output() timeChange:EventEmitter<string> = new EventEmitter<string>() // an event emitter
  @Output() change:EventEmitter<string> = new EventEmitter<string>() // an event emitter

  constructor(private element: ElementRef) {}

  ngOnInit() {
    var $element = $(this.element.nativeElement);
    $element.datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'h:mm A'
    });
    $element.data('DateTimePicker').date(moment(this.time).format('h:mm A'));

    $element.on('dp.change', (e) => {
      this.time = e.date.format('h:mm A');
      this.timeChange.emit(this.time);
      this.change.emit(this.time);
    });
  }

  ngOnChanges() {
    var $element = $(this.element.nativeElement);
    if($element.data('DateTimePicker')) {
      if(!this.time) {
        this.time = moment().format('h:mm A');
        $element.data('DateTimePicker').date(this.time);
      } else {
        $element.data('DateTimePicker').date(this.time);
      }
    }

    this.timeChange.emit(this.time);
    this.change.emit(this.time);
  }
}
