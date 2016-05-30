import { Component, Input, Output, EventEmitter, OnInit, Inject } from '@angular/core';

import { Link } from './link';

import { EditService } from '../edit.service';

@Component({
  selector: 'links',
  templateUrl: 'app/link/links.component.html',
  styleUrls: ['app/link/links.component.css']
})
export class LinksComponent implements OnInit {

  @Input() links:Link[];
  @Output() linksChange:EventEmitter<Link[]> = new EventEmitter();

  constructor(
    private editService:EditService
  ) {}

  ngOnInit() {}
}
