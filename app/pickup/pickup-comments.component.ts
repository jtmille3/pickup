import { Component, Input, OnInit, Inject } from '@angular/core';

import { Comment } from '../comment/comment';

declare var _;

@Component({
  selector: 'pickup-comments',
  templateUrl: 'app/pickup/pickup-comments.component.html',
  styleUrls: ['app/pickup/pickup-comments.component.css']
})
export class PickupCommentsComponent implements OnInit {

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
      commentId: -1,
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
