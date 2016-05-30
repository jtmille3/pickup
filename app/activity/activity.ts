import { Participant } from '../participant/participant';
import { Comment } from '../comment/comment';
import { Event } from '../event/event';
import { Notification } from '../notification/notification';
import { Link } from '../link/link';

export class Activity {
  activityId:number = -1;
  name:string = '';
  signups:number = 0;

  comments:Comment[] = [];
  notifications:Notification[] = [];
  events:Event[] = [];
  links:Link[] = [];
}
