import { Component, Input, OnInit, Inject } from '@angular/core';

import { Comment } from '../comment/comment';

@Component({
  selector: 'comments',
  templateUrl: 'app/comment/comments.component.html',
  styleUrls: ['app/comment/comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  comment:string;

  constructor(
    @Inject('USER_ID') private USER_ID
  ) {}

  ngOnInit() {}

  onSubmit() {
    if(!this.comment) {
      return;
    }

    // move this into a comment service...
    var comment:Comment = {
      commentId: Math.random() * 10000000,
      participantId: this.USER_ID.participantId,
      text: this.comment,
      timestamp: new Date()
    };

    this.comments.push(comment);

    this.comment = '';
  }

  onDelete(comment:Comment) {
    // move this into a comment service...
    this.comments = _.without(this.comments, comment);
  }
}
