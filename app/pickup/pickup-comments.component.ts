import { Component, Input, OnInit } from '@angular/core';

import { Comment } from '../comment';

declare var _;

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
    if(!this.comment) {
      return;
    }

    // move this into a comment service...
    var comment:Comment = new Comment();
    comment.commentId = -1;
    comment.participantId = 'jemill';
    comment.text = this.comment;
    comment.timestamp = new Date();

    console.log(this.comment);
    this.comments.push(comment);

    this.comment = '';
  }

  onDelete(comment:Comment) {
    // move this into a comment service...
    this.comments = _.without(this.comments, comment);
  }
}
