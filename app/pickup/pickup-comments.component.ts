import { Component, Input, OnInit } from '@angular/core';

import { Comment } from '../comment';

@Component({
  selector: 'pickup-comments',
  templateUrl: 'app/pickup/pickup-comments.component.html',
  styleUrls: ['app/pickup/pickup-comments.component.css']
})
export class PickupCommentsComponent implements OnInit {

  @Input() comments: Comment[];
  comment:string;

  constructor() {}

  ngOnInit() {
    console.log(this.comments);
  }

  onSubmit() {
    if(this.comment) {
      var comment:Comment = new Comment();
      comment.text = this.comment;

      console.log(this.comment);
      this.comments.push(comment);

      this.comment = '';
    }
  }
}
