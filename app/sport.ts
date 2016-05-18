import { Participant } from './participant';
import { Comment } from './comment';

export class Sport {
  id:number;
  name:string;
  signups:number;

  participants:Participant[];
  comments:Comment[];
}
