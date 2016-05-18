import { Participant } from './participant';
import { Comment } from './comment';
import { Event } from './event';

export class Activity {
  id:number;
  name:string;
  signups:number;

  comments:Comment[];
  events:Event[];
}
