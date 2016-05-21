import { Participant } from './participant';
import { Comment } from './comment';
import { Event } from './event';

export class Activity {
  activityId:number = -1;
  name:string = '';
  signups:number = 0;

  comments:Comment[] = [];
  events:Event[] = [];
}
