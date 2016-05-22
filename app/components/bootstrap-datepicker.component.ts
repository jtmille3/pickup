import { Component, Input, Output, OnInit, OnChanges, ElementRef, EventEmitter } from '@angular/core';

declare var $;
declare var moment;

@Component({
  selector: 'bootstrap-datepicker',
  template: ''
})
export class BootstrapDatePickerComponent implements OnInit, OnChanges {

  @Input() date:string;
  @Output() dateChange:EventEmitter<string> = new EventEmitter() // an event emitter
  @Output() change:EventEmitter<any> = new EventEmitter() // an event emitter

  constructor(private element: ElementRef) {}

  ngOnInit() {
    var $element = $(this.element.nativeElement);
    $element.datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'YYYY-MM-DD'
    });
    $element.data('DateTimePicker').date(moment(this.date).format('YYYY-MM-DD'));

    $element.on('dp.change', (e) => {
      this.date = e.date.format('YYYY-MM-DD');
      this.dateChange.emit(this.date);
      this.change.emit(this.date);
    });
  }

  ngOnChanges() {
    var $element = $(this.element.nativeElement);
    if($element.data('DateTimePicker')) {
      if(!this.date) {
        this.date = moment().format('YYYY-MM-DD');
        $element.data('DateTimePicker').date(this.date);
      } else {
        $element.data('DateTimePicker').date(this.date);
      }
    }

    this.dateChange.emit(this.date);
    this.change.emit(this.date);
  }
}
