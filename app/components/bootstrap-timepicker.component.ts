import { Component, Input, Output, OnInit, ElementRef, EventEmitter } from '@angular/core';

declare var $;

@Component({
  selector: 'bootstrap-timepicker',
  template: ''
})
export class BootstrapTimePickerComponent implements OnInit {

  @Output() timeChange:EventEmitter<string> = new EventEmitter() // an event emitter

  constructor(private element: ElementRef) {}

  ngOnInit() {
    var $element = $(this.element.nativeElement);
    $element.datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'HH:mm'
    });

    $element.on('dp.change', () => {
      this.timeChange.emit($element.data("DateTimePicker").date().format('HH:mm'));
    });
  }

  @Input() set time(time:string) {
    var $element = $(this.element.nativeElement);
    if($element.data('DateTimePicker')) {
      if(!time) {
        $element.data('DateTimePicker').date(new Date());
      } else {
        $element.data('DateTimePicker').date(time);
      }
    }
  }
}
