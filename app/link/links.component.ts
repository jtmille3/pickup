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
  @Output() linksChange:EventEmitter<Link[]> = new EventEmitter<Link[]>();

  constructor(
    private editService:EditService
  ) {}

  onDelete(link:Link) {
    this.links = _.without(this.links, link);
    this.linksChange.emit(this.links);
    return false;
  }

  ngOnInit() {}
}
