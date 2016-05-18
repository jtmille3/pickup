import { Participant } from './participant';
import { Comment } from './comment';

export class Activity {
  id:number;
  name:string;
  signups:number;

  participants:Participant[];
  comments:Comment[];
}
