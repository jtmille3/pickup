import { Component, Input, OnInit, ElementRef } from '@angular/core';

declare var $;

@Component({
  selector: 'bootstrap-datetimepicker',
  template: ''
})
export class BootstrapDateTimePickerComponent implements OnInit {

  constructor(private element: ElementRef) {}

  ngOnInit() {
    var $element = $(this.element.nativeElement);
    $element.datetimepicker({
        inline: true,
        sideBySide: true,
        format: 'yyyy/MM/dd'
    });
  }
}
