import { Component, OnInit, Input } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { Activity } from '../activity/activity';
import { Link } from './link';

@Component({
  selector: 'link-dialog',
  templateUrl: 'app/link/link-dialog.component.html',
  styleUrls: ['app/link/link-dialog.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LinkDialogComponent implements OnInit {

  text:string = '';
  href:string = '';

  static activity:Activity;

  constructor() {}

  ngOnInit() {}

  onAddLink() {
    if(!this.text || !this.href) {
      return;
    }

    var link:Link = {
      linkId: Math.random() * 10000000,
      text: this.text,
      href: this.href
    };

    LinkDialogComponent.activity.links.push(link);

    $('#link-modal').modal('hide');

    this.text = '';
    this.href = '';
  }

  public static show(activity:Activity):void {
    LinkDialogComponent.activity = activity;
    $('#link-modal').modal('show');
    $('#link-modal .text').focus();
  }
}
