import { Component, Input, OnInit, ElementRef } from '@angular/core';

declare var $;

@Component({
  selector: 'bootstrap-datetimepicker',
  templateUrl: 'app/components/bootstrap-datetimepicker.component.html',
  styleUrls: ['app/components/bootstrap-datetimepicker.component.css']
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
